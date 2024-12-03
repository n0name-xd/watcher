"use client";

import { useEffect, useRef } from "react";
import DvrPlayer from "@flussonic/flussonic-dvr-player";
import "@flussonic/flussonic-dvr-player/dist/fonts/font.css";

interface IFlussonicOptions {
  readonly options: {
    name: string;
    streamer_http: string;
    query?: string;
    token?: string;
    dvr?: boolean;
    tokenName?: string;
    zoom?: number;
  };
}

const DVRPlayer = ({ options }: IFlussonicOptions) => {
  const playerWrapper = useRef(null);

  useEffect(() => {
    const DVR = DvrPlayer.load(options, playerWrapper.current);
    console.log("initial player");

    return function cleanup() {
      const { DvrUnmount } = DVR;
      if (DvrUnmount) DvrUnmount();
    };
  }, [options]);

  return (
    <div id="dvr-player" ref={playerWrapper} style={{ width: 800, height: 600, margin: 16 }} />
  );
};

export default DVRPlayer;

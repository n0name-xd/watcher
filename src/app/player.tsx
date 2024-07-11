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
  };
}

const DVRPlayer = ({ options }: IFlussonicOptions) => {
  const playerWrapper = useRef(null);

  useEffect(() => {
    const DVR = DvrPlayer.load(options, playerWrapper.current);

    return function cleanup() {
      const { DvrInstance } = DVR;
      if (DvrInstance) {
        const instance = DvrInstance();
        if (instance) {
          instance.props.close();
        }
      }
    };
  }, [options]);

  return (
    <div
      id="dvr-player"
      ref={playerWrapper}
      style={{ width: "100%", height: "800px" }}
    />
  );
};

export default DVRPlayer;

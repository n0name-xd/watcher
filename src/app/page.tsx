"use client";

import DvrPlayer from "@flussonic/flussonic-dvr-player";
import { useEffect, useRef } from "react";

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
  const player = useRef(null);

  useEffect(() => {
    const DVR = DvrPlayer.load(options, player.current);

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
      ref={player}
      style={{ width: "300px", height: "300px" }}
    />
  );
};

export default function Home() {
  return (
    <div>
      <DVRPlayer
        options={{
          name: "1-70655ba8a1",
          streamer_http:
            "rtsp://admin:Lqrs!18d777@192.168.10.101/ISAPI/Streaming/Channels/101",
          token: "", // Auth token
          dvr: true,
        }}
      />
    </div>
  );
}

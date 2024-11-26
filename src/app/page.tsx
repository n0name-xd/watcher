"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import DVRPlayer from "./player";

// const DVRPlayer = dynamic(() => import("./player"), {
//   loading: () => <p>Player loading...</p>,
// });

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      <button onClick={() => setShowCamera(!showCamera)}>show camera</button>
      {showCamera ? (
        <DVRPlayer
          options={
            {
              dvr: false,
              proto: "hls",
              locale: "ru",
              name: "16.51-0f482a22c1",
              streamer_http: "https://streamer2.mayak-system.ru",
              token:
                "3.lC7idggIAAAAAAAAAE0ABifSP-Jfvf0xeV46_ammdXyzgcb0LqrenvgQ",
              query:
                "token=3.lC7idggIAAAAAAAAAE0ABifSP-Jfvf0xeV46_ammdXyzgcb0LqrenvgQ",
            } as any
          }
        />
      ) : null}
    </>
  );
}

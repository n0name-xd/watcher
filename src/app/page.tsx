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
              name: "23.42-6048f98a54",
              streamer_http: "https://streamer2.mayak-system.ru",
              token:
                "3.1el4o4PtAAAAAAAAAE0ABicstkkgkV9ZqPf69bFKkVF1jRv2Msgk_z1x",
              query:
                "token=3.1el4o4PtAAAAAAAAAE0ABicstkkgkV9ZqPf69bFKkVF1jRv2Msgk_z1x",
            } as any
          }
        />
      ) : null}
    </>
  );
}

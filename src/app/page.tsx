"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const DVRPlayer = dynamic(() => import("./player"), {
  loading: () => <p>Player loading...</p>,
});

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      <div className="flex gap-10">
        <div>
          <button onClick={() => setShowCamera(!showCamera)}>
            show camera
          </button>
        </div>

        <div>
          <Link
            className="text-base"
            href={
              "http://localhost:3000/embed/ag-10980401?dvr=false&token=3.7WapYrheAAAAAAAAAAEABiheTeW0nrMxE1ev2oH55q1DTqrmeJfy97oW"
            }
          >
            embed page
          </Link>
        </div>
      </div>

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

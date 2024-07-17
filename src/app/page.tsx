"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DVRPlayer = dynamic(() => import("./player"), {
  loading: () => <p>Player loading...</p>,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  //origin
  const name = "traffic-dc48a34d04";
  const streamer_http = "https://eu-001.vscdn.io";
  const token = "3.BUp2IVgpAAAAAAAAAAUABhzKgsafiwVgxka6257M0ku2Hpnai4sxgSwD";

  //watcher
  // const name = "kamera.72.1.10-05ace3930b";
  // const streamer_http = "https://watcher.mayak-system.ru";
  // const token = "3.6x2QOGKCAAAAAAAAAAEABhz3xUoV9WY_EuZVZm136gTWmsW7SBL4muAO";

  return (
    <div>
      {isClient ? (
        <DVRPlayer
          options={{
            zoom: 600,
            name,
            streamer_http,
            token,
            dvr: true,
          }}
        />
      ) : null}
    </div>
  );
}

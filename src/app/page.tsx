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

  return (
    <div>
      {isClient ? (
        <DVRPlayer
          options={{
            name: "traffic-dc48a34d04",
            streamer_http: "https://eu-001.vscdn.io",
            token: "3.BUp2IVgpAAAAAAAAAAUABhzKgsafiwVgxka6257M0ku2Hpnai4sxgSwD", // Auth token
            dvr: true,
          }}
        />
      ) : null}
    </div>
  );
}

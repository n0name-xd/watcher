"use client";

import DVRPlayer from "./player";

export default function Home() {
  return (
    <>
      <DVRPlayer
        options={
          {
            dvr: true,
            locale: "ru",
            name: "ofis.ias-eb236c19a2",
            streamer_http: "https://watcher.mayak-system.ru",
            query: `token=3.bZjltMtNAAAAAAAAAAEABifhNlf2aroBzzRQ6V7ea6Cy8fmmxZ7QIKlc`,
            muted: "false", // <---------- ????
          } as any
        }
      />
    </>
  );
}

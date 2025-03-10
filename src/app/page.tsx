"use client";
import dynamic from "next/dynamic";

const DVRPlayer = dynamic(() => import("./player"), {
  loading: () => <p>Player loading...</p>,
});

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uIjoiMkdOcjd0WUZKa25aWnBJOXViM1Z4dnRHcm9nIiwiZXhwIjoxNzQxNjA3NjAwfQ.SPUk9ex_-8tVcSSKuNxFNuredhLns7g4rvzcRq3M878";

export default function Home() {
  return (
    <div className="w-[600] h-[400]">
      <DVRPlayer
        options={
          {
            name: "1-70655ba8a1",
            streamer_http: "https://streamer2.mayak-system.ru",
            dvr: true,
            token: "3.0nlt2UwFAAAAAAAAAAEABi_2sYvzcK7Q4zvIcBXlWsr20qnC33oR57C_",
            from: 1740399498,
            to: 1740399558,
            locale: "ru",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            ptz: {
              show_ptz_controls: false,
              api_url:
                "https://watcher.mayak-system.ru/watcher/client-api/v3/streams/1-70655ba8a1/ptz",
            },
          } as any
        }
      />
    </div>
  );
}

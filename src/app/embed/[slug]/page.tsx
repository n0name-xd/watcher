"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DVRPlayer = dynamic(() => import("../../player"), {
  loading: () => <p>Loading...</p>,
});

export default function Page({ params }: { params: { slug: string } }) {
  const [isDocument, setIsDocument] = useState<boolean>(false);
  const slug = params.slug;
  const searchParams = useSearchParams();

  const dvr = searchParams.get("dvr")?.toLocaleLowerCase() === "true",
    token = searchParams.get("token");

  useEffect(() => {
    if (window) {
      setIsDocument(true);
    }
  }, [isDocument]);

  if (!slug || !token || !isDocument)
    return <div>Некорректные параметры запроса</div>;

  return (
    <div>
      <DVRPlayer
        options={{
          name: slug,
          streamer_http: "https://streamer1.mayak-system.ru",
          token,
          dvr: dvr.toString(),
          locale: "ru",
          muted: "false",
          proto: "hls",
        }}
        styles={{
          height: "100vh",
          width: "100vw",
        }}
      />
    </div>
  );
}

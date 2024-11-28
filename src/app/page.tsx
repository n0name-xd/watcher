"use client";
import dynamic from "next/dynamic";
import {ButtonWithModal} from "@/app/ButtonWithModal";

// const DVRPlayer = dynamic(() => import("./player"), {
//   loading: () => <p>Player loading...</p>,
// });

export default function Home() {
  return (
    <>
      {[
        { name: 'nomera-f8c02deb4d', token: '3.P6tCUuAIAAAAAAAAAAEABifigs-KODgrpu9qp3k-k1yWQq19ldElxQEb' },
        { name: 'ofis.ias-eb236c19a2', token: '3.bZjltMtNAAAAAAAAAAEABifhNlf2aroBzzRQ6V7ea6Cy8fmmxZ7QIKlc' },
        { name: 'cod.skynet-91ec9cf86a', token: '3.bZjltMtNAAAAAAAAAAEABifhNlf2ahcdScEiNobl2E5V-MfYIbXZF1kz'}
      ].map((item, index) => (
        <ButtonWithModal name={item.name} key={item.name} token={item.token} index={index} />
      ))}
    </>
  );
}

import Image from "next/image";
import React from "react";

export const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "/openai.webp",
    },
    {
      title: "Hello Patient",
      src: "/hello-patient.webp",
    },
    {
      title: "Character AI",
      src: "/characterai.webp",
    },
    {
      title: "Granola",
      src: "/granola.webp",
    },
    {
      title: "Oracle",
      src: "/oracle.webp",
    },
    {
      title: "Portola",
      src: "/portola.webp",
    },
  ];
  return ( 
  <section className=""> 
    <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg max-w-xl mx-auto text-center">
    Trusted by modern operators across industries.<br/>{" "}
    <span className="text-neutral-400">
    {" "}
      From pilot to scale without chaos.
      </span>
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
    {logos.map((logo, index) => (
        <Image
        key={logo.title}
        src={logo.src}
        alt={logo.title}
        width={100}
        height={100}
        className="size-20 object-contain mx-auto"
        />
    ))}
    </div>
  </section>
  )
};

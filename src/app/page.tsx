import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ModeToggle } from "@/components/mode-toggle";
import { Speed } from "@/components/speed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LogoCloud/>
      <Features/>
      <Speed/>
    </div>
  );
}

import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { ModeToggle } from "@/components/mode-toggle";
import { Speed } from "@/components/speed";
import { FileIcon } from "@/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <LogoCloud/>
      <Features/>
      <Speed/>
      <FeaturesSecondary/>
    </div>
  );
}

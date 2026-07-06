import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-display">
    <ModeToggle/>
    <p className="font-inter">
      Deploy Agents in minutes 
    </p>
    </div>
  );
}

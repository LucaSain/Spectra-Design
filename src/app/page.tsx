import Beliefs from "@/components/Beliefs";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Beliefs />
      <Projects />
      <Team />
      <Partners />
    </div>
  );
}

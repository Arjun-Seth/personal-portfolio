import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import loadEnv from "@/env.config";

export default function Home() {
  // loadEnv();
  return (
    <main className="h-full w-full">
      <div className="flex flex-col md:gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />

        <Contact />
      </div>
    </main>
  );
}

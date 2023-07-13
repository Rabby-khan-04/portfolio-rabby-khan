import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Process from "@/components/Home/Process/Process";
import Project from "@/components/Home/Project/Project";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Project />
      <Process />
      <Contact />
    </>
  );
}

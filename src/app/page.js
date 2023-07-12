import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Process from "@/components/Home/Process/Process";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Process />
    </>
  );
}

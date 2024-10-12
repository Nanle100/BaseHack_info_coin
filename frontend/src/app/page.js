import About from "@/components/About";
import Databundle from "@/components/Databundle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
      <Header />
      <Hero />
      <About />
      <Databundle />
      <Footer />
    </div>
  );
}

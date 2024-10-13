"use client";
import About from "@/components/About";
import Databundle from "@/components/Databundle";
import DatabundlePage from "@/components/DatabundlePage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isViewBundle, setIsViewBundle] = useState(false);
  return (
    <div className="p-10">
      {!isViewBundle ? (
        <div className="">
          <Header />
          <Hero />
          <About setIsViewBundle={setIsViewBundle} />
          <Databundle />
          <Footer />
        </div>
      ) : (
        <DatabundlePage />
      )}
    </div>
  );
}

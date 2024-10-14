"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = ({ setIsViewBundle }) => {
  const router = useRouter();
  return (
    <div className="">
      <h1 className="title my-10">About Infocoin</h1>
      <div className="lg:flex gap-10 items-center">
        <Image
          className=" rounded-lg lg:hidden mb-5"
          alt=""
          width={500}
          height={500}
          src="/abt.png"
        />
        <div className="lg:w-[50%]">
          <p className="text-xl mb-5 text-center">
            Infocoin is a platform where you can buy data and airtime with any
            currency you have (on-chain and off-chain In Infocoin you can have a
            subscription plan for any perion of time you want Infocoin is the
            fast, secure and affordable way to get your data bundles on any
            Nigerian network. We offer the best prices rates for Airtel, MTN,
            9mobile and Glo. You can get any data bundle as low as 500MB with
            crypto currency.
          </p>
          <button
            onClick={() => setIsViewBundle(true)}
            className="btn-full w-full mt-3 lg:w-[50%] cursor-pointer"
          >
            View Bundle
          </button>
        </div>
        <Image
          className="w-[50%] rounded-lg hidden lg:block"
          alt=""
          width={500}
          height={500}
          src="/abt.png"
        />
      </div>
    </div>
  );
};

export default About;

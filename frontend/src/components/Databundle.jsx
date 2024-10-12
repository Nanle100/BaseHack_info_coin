import React from "react";
import Image from "next/image";

const Databundle = () => {
  return (
    <div className="">
      <h1 className="title mt-20">Infocoin Data Bundle </h1>
      <p className="text-center text-xl mt-3 mb-10">
        Infocoin offer a very affordable data bundle even if it’s on-chain
        transaction
      </p>
      <div className="lg:flex  gap-10 items-center justify-between my-20">
        <Image
          className="rounded-lg my-3 w-full "
          alt=""
          width={250}
          height={250}
          src="/airtel.png"
        />
        <Image
          className="rounded-lg w-full my-3"
          alt=""
          width={250}
          height={250}
          src="/glo.png"
        />
        <Image
          className="rounded-lg w-full my-3"
          alt=""
          width={250}
          height={250}
          src="/mtn.png"
        />
        <Image
          className="rounded-lg w-full my-3"
          alt=""
          width={250}
          height={250}
          src="/etisalat.png"
        />
      </div>
    </div>
  );
};

export default Databundle;

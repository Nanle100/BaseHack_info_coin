"use client";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({ setIsViewBundle }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <div>
      <div className="items-center border-b-[1px] border-gray-200 flex justify-between bg-slate-50 -m-5 p-5 lg:-m-10 lg:p-5">
        {/* logo */}

        <Link href="/" className="text-primary font-bold text-xl">
          Infocoin
        </Link>

        {/* navitems */}
        <div className="lg:flex gap-5 hidden ">
          {navItems.map((item) => (
            <>
              <p>{item.label}</p>
            </>
          ))}
        </div>
        {/* signin */}
        <div className="lg:flex gap-5 hidden">
          {/* <button className="btn-trans">Sign Up</button> */}
          {/* <button className="btn-full">Connect Wallet</button> */}
          <w3m-button />
        </div>

        <Image
          onClick={() => setIsMenuClicked(!isMenuClicked)}
          className="h-[10px] w-[30px] cursor-pointer lg:hidden"
          alt=""
          width={100}
          height={100}
          src="/menu.png"
        />
      </div>

      {isMenuClicked && (
        <div className="bg-white fixed h-[220px] w-[85%] shadow-xl mt-10 z-50 p-4">
          {navItems.map((item) => (
            <>
              <p className="my-2">{item.label}</p>
            </>
          ))}

          <w3m-button />
        </div>
      )}
    </div>
  );
};

export default Header;

import React from "react";

const Hero = () => {
  return (
    <div>
      {/* first */}
      <div className="my-20 flex flex-col items-center justify-center gap-5">
        <h1 className="text-primary font-bold text-center text-xl lg:text-4xl">
          Buy data and airtime Easily with Crypto
        </h1>
        <p className="text-primary lg:w-[50%] text-center">
          Top up your data and airtime in seconds using cryptocurrency, it’s
          fast, secure and works anywhere in the world. No waiting, just quick
          and easy top-ups,,,
        </p>
        <div className="flex gap-4">
          <button className="btn-full">Get Started</button>
          <button className="btn-trans ">Learn more</button>
        </div>
      </div>

      {/* sencond */}
      <div className="lg:flex hidden lg:flex-row justify-between p-[4rem]">
        <div className="rounded-full p-4 border-[1px] border-primary h-[350px]">
          <div className="rounded-full bg-primary text-white h-[330px] text-center  flex justify-center items-center ">
            <p className="w-[95%] text-center text-2xl">
              Get 20% off for first transaction
            </p>
          </div>
        </div>

        {/* 2.2 */}
        <div className="rounded-full p-4 border-[1px] border-primary h-[350px]">
          <div className="rounded-full bg-primary text-white h-[330px] text-center  flex justify-center items-center ">
            <p className="w-[95%] text-center text-[1.6rem]">
              Buy data and airtime anytime
            </p>
          </div>
        </div>

        {/* 2.3 */}
        <div className="rounded-full p-4 border-[1px] border-primary h-[350px]">
          <div className="rounded-full bg-primary text-white h-[330px] text-center  flex justify-center items-center ">
            <p className="w-[95%] text-center text-[1.6rem]">
              All mobile network available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

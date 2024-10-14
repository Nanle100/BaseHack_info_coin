"use client";
import { dailyBundle } from "@/constants";
import React, { useState } from "react";
import BundleCard from "./BundleCard";
import Header from "./Header";

const DatabundlePage = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");
  const [chosenText, setchosenText] = useState("MTN Data Bundle");
  const [isOtherDataOptions, setIsOtherDataOptions] = useState(false);
  const [isComingSoon, setIsComingSoon] = useState(false);
  return (
    <div className="">
      <Header />
      <div className="mt-20">
        <div className="my-10 flex gap-3 items-center ">
          <h1>{chosenText}</h1>
          <p
            onClick={() => setIsOtherDataOptions(!isOtherDataOptions)}
            className="text-xl font-bold cursor-pointer"
          >
            {">"}
          </p>
        </div>

        {isOtherDataOptions && (
          <div className="shadow-xl absolute z-50 bg-white p-5 border-[1px] rounded-lg">
            <p
              onClick={() => (
                setchosenText("Airtel Data Bundle"),
                setSelectedNetwork("airtel")
              )}
              className="border-[1px] p-1 rounded-lg my-1 px-2 cursor-pointer"
            >
              Airtel Data Bundle
            </p>
            <p
              onClick={() => (
                setchosenText("Glo Data Bundle"), setSelectedNetwork("glo")
              )}
              className="border-[1px] p-1 rounded-lg my-1 px-2 cursor-pointer"
            >
              Glo Data Bundle
            </p>
            <p
              onClick={() => (
                setchosenText("MTN Data Bundle"), setSelectedNetwork("etisalat")
              )}
              className="border-[1px] p-1 rounded-lg my-1 px-2 cursor-pointer"
            >
              Etisalat Data Bundle
            </p>
            <p
              onClick={() => (
                setchosenText("MTN Data Bundle"), setSelectedNetwork("mtn")
              )}
              className="border-[1px] p-1 rounded-lg my-1 px-2 cursor-pointer"
            >
              MTN Data Bundle
            </p>
          </div>
        )}

        {!isComingSoon ? (
          <div>
            {selectedNetwork === "mtn" && (
              <div className="lg:flex-row flex flex-col gap-10 justify-between">
                <BundleCard
                  color="bg-yellow-300"
                  top="Daily"
                  bundleList={dailyBundle}
                  setIsComingSoon={setIsComingSoon}
                />
                <BundleCard
                  color="bg-yellow-300"
                  top="Weekly"
                  bundleList={dailyBundle}
                  setIsComingSoon={setIsComingSoon}
                />
                <BundleCard
                  color="bg-yellow-300"
                  top="Monthly"
                  bundleList={dailyBundle}
                  setIsComingSoon={setIsComingSoon}
                />
              </div>
            )}

            {selectedNetwork === "airtel" && (
              <div className="lg:flex-row flex flex-col gap-10 justify-between">
                <BundleCard
                  color="bg-red-500"
                  top="Daily"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-red-500"
                  top="Weekly"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-red-500"
                  top="Monthly"
                  bundleList={dailyBundle}
                />
              </div>
            )}

            {selectedNetwork === "glo" && (
              <div className="lg:flex-row flex flex-col gap-10 justify-between">
                <BundleCard
                  color="bg-[#72AE49]"
                  top="Daily"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-[#72AE49]"
                  top="Weekly"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-[#72AE49]"
                  top="Monthly"
                  bundleList={dailyBundle}
                />
              </div>
            )}

            {selectedNetwork === "etisalat" && (
              <div className="lg:flex-row flex flex-col gap-10 justify-between">
                <BundleCard
                  color="bg-[#63811f]"
                  top="Daily"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-[#63811f]"
                  top="Weekly"
                  bundleList={dailyBundle}
                />
                <BundleCard
                  color="bg-[#63811f]"
                  top="Monthly"
                  bundleList={dailyBundle}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-lg mx-auto  ">
            <h1>Customer Mobile Number</h1>
            <div className="flex  my-3">
              <p className="bg-primary px-10 py-3 rounded-l-lg text-white">
                +234
              </p>
              <input
                className="border-[1px] px-5 w-full rounded-r-lg"
                placeholder="Phone no"
              />
            </div>

            <div className="lg:flex gap-3 justify-between my-10">
              <div className=" my-3 lg:w-[45%]">
                <p>Select Chain</p>
                <select className="border-[1px] px-3 h-[45px] w-[100%] ">
                  <option>ETH</option>
                  <option>ETH</option>
                  <option>ETH</option>
                </select>
              </div>

              <div className="my-3 lg:w-[45%]">
                <p>Select Mobile Network </p>
                <select className="border-[1px] px-3 h-[45px] w-[100%] ">
                  <option>MTN</option>
                  <option>GLo</option>
                  <option>Aittel</option>
                </select>
              </div>
            </div>

            <div>
              <p>Select Data Plan</p>
              <select className="border-[1px] mt-2 px-1 h-[45px] w-[100%] ">
                <option>10GB 30 Days</option>
                <option>15GB 30 Days</option>
              </select>
            </div>

            <button className="btn-full mt-10 w-full h-[50px]">
              Coming Soon
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabundlePage;

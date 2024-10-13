"use client";
import { dailyBundle } from "@/constants";
import React, { useState } from "react";
import BundleCard from "./BundleCard";
import Header from "./Header";

const DatabundlePage = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");
  const [chosenText, setchosenText] = useState("MTN Data Bundle");
  const [isOtherDataOptions, setIsOtherDataOptions] = useState(false);
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

        {selectedNetwork === "mtn" && (
          <div className="lg:flex-row flex flex-col gap-10 justify-between">
            <BundleCard
              color="bg-yellow-300"
              top="Daily"
              bundleList={dailyBundle}
            />
            <BundleCard
              color="bg-yellow-300"
              top="Weekly"
              bundleList={dailyBundle}
            />
            <BundleCard
              color="bg-yellow-300"
              top="Monthly"
              bundleList={dailyBundle}
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
    </div>
  );
};

export default DatabundlePage;

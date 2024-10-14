import React from "react";

const BundleCard = ({ top, bundleList, color, setIsComingSoon }) => {
  return (
    <div className={`${color} w-[400px] p-5`}>
      <button className="btn-full w-[150px]">{top}</button>
      <div className="mt-5">
        {bundleList.map((item) => (
          <>
            <div
              onClick={() => setIsComingSoon(true)}
              className="flex cursor-pointer gap-10 items-center p-2 bg-green-100 my-2 rounded-lg"
            >
              <p className="w-[150px]">{item.data} </p>
              <p className="w-[100px]">for</p>
              <p className="w-[100px]">{item.coin}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BundleCard;

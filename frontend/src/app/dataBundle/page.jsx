import { dailyBundle } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>MTN Data Bundle</h1>

      <div>
        <button>Daily</button>
        <div>
          {dailyBundle.map((item) => (
            <>
              <p>
                {item.data} for {item.coin}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import { Link } from "react-router-dom";

const GetEarlyAccess = () => {
  return (
    <div className="py-20 z-0 px-4 bg-[#101828] w-full mx-auto">
      <h1 className="lg:text-[42px] text-center md:text-[36px] text-[32px] font-thin text-white">
        WE ARE COMING SOON!
      </h1>
      <p className="text-[18px] text-center md:text-[20px] lg:text-[24px] text-white">
        Join waitlist for a new era of trading.
      </p>

      <div className="flex mt-[30px]">
        <Link className="mx-auto" to={"/joinwaitlist"}>
          <button className="py-3 px-8 rounded-md bg-green mx-auto">
            Get Early Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetEarlyAccess;

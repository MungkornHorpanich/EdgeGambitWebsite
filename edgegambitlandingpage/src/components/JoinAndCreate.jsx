import React from "react";
import Picture from "../assets/Platform.png";
import { Link } from "react-router-dom";

const JoinAndCreate = () => {
  return (
    <div className="py-20 z-0 px-4 bg-[#101828] w-full mx-auto">
      <h1 className="text-center text-white lg:text-[42px] md:text-[30px] text-[22px]">
        Join and Create Competitions
      </h1>
      <img className="mx-auto mt-[50px]" src={Picture} alt="Platform picture" />
      <Link to={"/joinwaitlist"}>
        <button className="py-3 flex justify-center mt-[50px] px-8 rounded-md bg-green mx-auto">
          Get Early Access
        </button>
      </Link>
    </div>
  );
};

export default JoinAndCreate;

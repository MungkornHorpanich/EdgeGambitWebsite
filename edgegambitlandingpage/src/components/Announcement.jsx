import React from "react";

const Announcement = () => {
  return (
    <div className="w-screen m-0 fixed text-white bg-[#101828]">
      <marquee className="mt-1">
        <p className="p-0">random stuff going around here</p>
      </marquee>
    </div>
  );
};

export default Announcement;

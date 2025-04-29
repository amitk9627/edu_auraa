import React from "react";
import profile from "../../../assets/images/profile-dummy.svg";
import camera from "../../../assets/images/camera-icon.svg";

const InstituteInfo = ({setValue}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={profile} alt="profileIcon" className="size-[60px]" />
        <img
          src={camera}
          alt="cameraIcon"
          className="size-[20px] absolute left-[5%] bottom-[1%]"
        />
      </div>
      <input
        type="text"
        placeholder="Institute Name (pre-filled)"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <input
        type="text"
        placeholder="Tagline / Motto"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <input
        type="text"
        placeholder="Current Location (Auto-detect or search dropdown) - Prefilled"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <input
        type="text"
        placeholder="Enter Your Contact  Number"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <input
        type="text"
        placeholder="Enter Your Email ID"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <input
        type="text"
        placeholder="Total Students (Range : Dropdown)"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <textarea
        type="text"
        placeholder="About Institute (textarea)"
        className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      <div className="w-[70%] flex gap-4">
        <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
          Skip
        </button>
        <button onClick={()=>setValue(1)} className="cursor-pointer py-2 w-full flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] ">
          Save & Proceed
        </button>
      </div>
    </div>
  );
};

export default InstituteInfo;

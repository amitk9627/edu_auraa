import React from "react";
import save from "../../assets/MainProfileImages/save.png";
import share from "../../assets/MainProfileImages/share.png";

const AcademyDetails = () => {
  return (
    <div className="flex justify-between items-start mt-[30px]">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">
          Chanakya IAS Academy – UPSC
        </h1>
        <p>Tagline</p>
      </div>
      <div className="flex space-x-2">
        <button className="flex items-center px-4 py-2 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100">
          <img className="w-[20px] h-[20px]" src={save}></img>
        </button>
        <button className="flex items-center px-4 py-2 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100">
        <img className="w-[20px] h-[20px]" src={share}></img>
        </button>
      </div>
    </div>
  );
};

export default AcademyDetails;

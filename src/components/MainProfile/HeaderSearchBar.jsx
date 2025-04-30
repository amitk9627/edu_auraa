import React from "react";
import Container from "../Container/Container";

const HeaderSearchBar = () => {
  return (
    <Container>
    <div className="bg-[#fff] p-[24px] rounded-[8px] flex flex-col sm:flex-row items-center gap-4">
      
      <div className="flex-1 w-full">
        <label className="block text-[16px] text-gray-500 mb-1">What do you want to prepare for?</label>
        <input
          type="text"
          placeholder="e.g., UPSC, NEET, SSC"
          className="w-full text-[#565E6D] text-[20px] font-normal"
        />
      </div>

      <div className="flex-1 w-full">
        <label className="block text-[16px] text-gray-500 mb-1">Where do you want to study?</label>
        <input
          type="text"
          placeholder="e.g., Delhi, Kota, Online"
           className="w-full text-[#565E6D] text-[20px] font-normal"
        />
      </div>

      <button className="bg-gray-700 text-white px-5 py-2 rounded cursor-pointer hover:bg-gray-800 transition w-full sm:w-auto">
        Search Coaching Center
      </button>
     
    </div> 
    </Container>
  );
};

export default HeaderSearchBar;

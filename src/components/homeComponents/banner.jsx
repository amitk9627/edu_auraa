import React from "react";
import Students from "../../assets/images/students.svg";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import studyStudents from "../../assets/images/studyStudents.svg";
import Container from "../Container/Container";
const banner = () => {
  return (
    <div className="bg-gray-50 py-[60px] h-[580px]">
      <Container>
        <div className="grid grid-cols-2">
          {/* Left Text Content */}
          <div className="w-[551px] mt-[50px]">
            <h1 className="text-[40px] font-semibold tracking-normal text-[#000000] mb-[10px] leading-[52px]">
              Find Your{" "}
              <span className="text-[#5e5bfb]">
                Perfect <br></br> Coaching Institute
              </span>{" "}
              Today!
            </h1>
            <p className="text-[#888888] mb-[40px] font-medium tracking-normal text-[30px] leading-[44px]">
              Explore top-rated coaching centers tailored to your needs.
            </p>

            {/* Search Input */}
            <div className="relative w-[510px]">
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
              />
              <input
                type="text"
                placeholder="Enter city or subject..."
                className="pl-12 pr-4 py-[20px] w-[100%] h-[56px] bg-[#fff] rounded-l-md text-[18px] leading-[16px] font-normal text-[#C0C0C0]"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-[#5E5BFB] text-white px-[28px] py-[18px] rounded-r-md text-[20px] leading-[20px] font-semibold hover:bg-indigo-700 transition">
                Search Now
              </button>
            </div>
          </div>

          <div className=" flex gap-[20px]">
            {/* Bottom Image (on top visually) */}
            <img
              src={studyStudents}
              className="top-[125px] w-[276px] h-[320px] relative"
            />
            <img src={Students} className="w-[276px] h-[320px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default banner;

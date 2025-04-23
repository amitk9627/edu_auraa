import React from "react";
import BannerImage from "../../assets/images/Simple.svg?url";
import SearchIcon from "../../assets/images/SearchIcon.svg";
const SubscribeBanner = () => {
  const bgBannerImage = {
    backgroundImage: `url(${BannerImage})`,
  };
  return (
    <div
      className="py-[51px] max-md:py-4 my-[60px] max-md:my-10 max-md:mx-4 bg-no-repeat  bg-contain max-md:bg-cover rounded-2xl px-[50px] max-md:px-4 text-white"
      style={bgBannerImage}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 max-md:gap-4">
        {/* Text */}
        <div>
          <h3 className="text-[32px] max-md:text-[24px] leading-[42px] max-md:leading-[32px] font-semibold mb-[4px]">
            Join and get amazing discount
          </h3>
          <p className="text-[20px] max-md:text-[16px] leading-[36px] max-md:leading-[28px] text-white/80">
            With our responsive themes and mobile and desktop apps
          </p>
        </div>

        {/* Input Box */}
        <form className="flex items-center gap-[14px] overflow-hidden">
          <div className="flex bg-[#b1b8fc] pr-[20px]">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 h-[41px] w-[243px] max-md:w-[170px] text-[16px] rounded-[3px] leading-[21px] text-[#dddffa]"
            />
            <img className="text-[#fff]" src={SearchIcon}></img>
          </div>
          <button
            type="submit"
            className="bg-[#fff] text-[#5E5BFB]  rounded-[3px] text-[16px] px-4   py-2 hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Decorative Image */}
    </div>
  );
};

export default SubscribeBanner;

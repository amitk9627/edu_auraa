import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/images/BannerImage.svg";
import DropdownArrow from "../../assets/images/dropdownArrow.svg";

const Banner = () => {
  const bgBannerImage = {
    backgroundImage: `url(${BannerImage})`,
  };

  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [streams, setStreams] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const ApiResponse = {
      cities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
      areas: ["Dwarka", "Andheri", "Whitefield", "Gachibowli"],
      streams: ["Science", "Commerce", "Arts", "Engineering"],
      years: ["First Year", "Second Year", "Third Year", "Final"],
    };

    const timer = setTimeout(() => {
      setCities(ApiResponse.cities);
      setAreas(ApiResponse.areas);
      setStreams(ApiResponse.streams);
      setYears(ApiResponse.years);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative h-[480px] max-md:h-[640px] bg-cover bg-center"
      style={bgBannerImage}
    >
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center px-4 text-center max-md:text-left">
        <div>
          <h1 className="text-[24px] md:text-[40px] font-bold mb-[16px] md:mb-[20px] leading-[30px] md:leading-[52px] text-white drop-shadow-md">
            Find Your Perfect Coaching Institute Today!
          </h1>
          <p className="text-[18px] md:text-[32px] mb-[32px] md:mb-[40px] leading-[24px] md:leading-[44px] text-white drop-shadow-md">
            Explore top-rated coaching centers tailored to your needs.
          </p>
        </div>
        <div className="bg-white max-md:py-5 max-md:px-6 rounded-[8px] shadow-lg sm:px-[16px] md:px-0 py-[16px] w-full max-w-6xl flex flex-wrap justify-center gap-4">
          <div className="relative w-full md:w-1/5">
            <select className="w-full appearance-none py-[10px] px-[16px] bg-[#F6F6F6] text-[#626262] border-0 border-b border-b-[#D6D7D7] rounded-none focus:outline-none">
              <option value="">Select City</option>
              {cities.map((city, idx) => (
                <option key={idx} value={city.toLowerCase()}>
                  {city}
                </option>
              ))}
            </select>
            <img
              src={DropdownArrow}
              alt="Dropdown Arrow"
              className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          <div className="relative w-full md:w-1/5">
            <select className="w-full appearance-none py-[10px] px-[16px] bg-[#F6F6F6] text-[#626262] border-0 border-b border-b-[#D6D7D7] rounded-none focus:outline-none">
              <option value="">Select Area</option>
              {areas.map((area, idx) => (
                <option key={idx} value={area.toLowerCase()}>
                  {area}
                </option>
              ))}
            </select>
            <img
              src={DropdownArrow}
              alt="Dropdown Arrow"
              className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
          <div className="relative w-full md:w-1/5">
            <select className="w-full appearance-none py-[10px] px-[16px] bg-[#F6F6F6] text-[#626262] border-0 border-b border-b-[#D6D7D7] rounded-none focus:outline-none">
              <option value="">Select Stream</option>
              {streams.map((stream, idx) => (
                <option key={idx} value={stream.toLowerCase()}>
                  {stream}
                </option>
              ))}
            </select>
            <img
              src={DropdownArrow}
              alt="Dropdown Arrow"
              className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
          <div className="relative w-full md:w-1/5">
            <select className="w-full appearance-none py-[10px] px-[16px] bg-[#F6F6F6] text-[#626262] border-0 border-b border-b-[#D6D7D7] rounded-none focus:outline-none">
              <option value="">Select Year</option>
              {years.map((year, idx) => (
                <option key={idx} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <img
              src={DropdownArrow}
              alt="Dropdown Arrow"
              className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>

          <button className="w-full md:w-auto px-6 py-2 bg-[#0A82C5] rounded-[4px] text-white text-[16px] font-medium hover:bg-blue-700 cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

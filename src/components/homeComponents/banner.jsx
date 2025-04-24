// import React from "react";
// import Students from "../../assets/images/students.svg";
// import SearchIcon from "../../assets/images/SearchIcon.svg";
// import studyStudents from "../../assets/images/studyStudents.svg";
// import Container from "../Container/Container";
// const banner = () => {
//   return (
//     <div className="bg-gray-100 py-[60px] h-[580px] max-md:h-[85%]">
//       <Container>
//         <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-14  max-md:mx-4 ">
//           {/* Left Text Content */}
//           <div className="w-[551px] mt-[50px] max-md:order-2 max-md:w-full">
//             <h1 className="text-[40px] max-md:text-[32px] font-semibold tracking-normal text-[#000000] mb-[10px] leading-[52px] max-md:leading-[40px]">
//               Find Your{" "}
//               <span className="text-[#5e5bfb]">
//                 Perfect <br></br> Coaching Institute
//               </span>{" "}
//               Today!
//             </h1>
//             <p className="text-[#888888] mb-[40px] font-medium tracking-normal text-[30px] max-md:text-[24px] leading-[44px] max-md:leading-[28px]">
//               Explore top-rated coaching centers tailored to your needs.
//             </p>

//             {/* Search Input */}
//             <div className="relative w-[510px] max-md:w-full ">
//               <img
//                 src={SearchIcon}
//                 alt="Search Icon"
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 max-md:h-4 z-10  hover:translate-y-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter city or subject..."
//                 className="pl-12 pr-4 py-[20px] w-[100%] h-[56px] bg-[#fff] rounded-l-md text-[18px] leading-[16px] font-normal text-[#C0C0C0]"
//               />
//               <button className="absolute right-0 top-0 bottom-0 bg-[#5E5BFB] text-white px-[28px] py-[18px] max-md:px-3 rounded-r-md text-[20px] max-md:text-[14px] leading-[20px] font-semibold hover:bg-indigo-700 transition">
//                 Search Now
//               </button>
//             </div>
//           </div>

//           <div className=" flex gap-4">
//             {/* Bottom Image (on top visually) */}
//             <img
//               src={studyStudents}
//               className="top-[50px] w-[276px] h-[320px] relative  max-md:w-[172.74px] max-md:h-[200.28px]"
//             />
//             <img
//               src={Students}
//               className="w-[276px] h-[320px] max-md:w-[172.74px] max-md:h-[200.28px]"
//             />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default banner;
import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/images/Banner.svg";
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

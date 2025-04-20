import React from "react";
import BannerImage from "../../assets/images/statisticsBg.png?url";

import CountUp from "react-countup";

const Statistics = () => {
  const bgBannerImage = {
    backgroundImage: `url(${BannerImage})`,
  };
  const stats = [
    { count: 500, label: "Coaching Institutes" },
    { count: 500, label: "Coaching Institutes" },
    { count: 500, label: "Coaching Institutes" },
    { count: 500, label: "Coaching Institutes" },
  ];

  return (
    <div className="py-10 max-md:py-5 bg-center bg-cover" style={bgBannerImage}>
      <div className="max-w-6xl mx-auto px-4 h-[64px]  flex items-center justify-center gap-6 text-white text-center">
        {stats.map((item, index) => (
          <div key={index} className="w-[20%]">
            <h2 className="text-[36px] max-md:text-[14px] leading-[36px] max-md:leading-5 text-[#fff] font-bold">
              <CountUp end={item.count} duration={2} />+
            </h2>
            <p className="text-[16px] max-md:text-[12px] leading-[16px] max-md:leading-3  mt-[12px] max-md:mt-0 text-[#E9E9E9]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

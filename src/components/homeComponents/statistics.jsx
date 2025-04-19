import React from "react";
import BannerImage from "../../assets/images/statisticsBg.png?url";

import CountUp from "react-countup";

const Statistics = () => {
  const bgBannerImage = {
    backgroundImage: `url(${BannerImage})`,
  };
  const stats = [
    { count: 500, label: 'Coaching Institutes' },
    { count: 500, label: 'Coaching Institutes' },
    { count: 500, label: 'Coaching Institutes' },
    { count: 500, label: 'Coaching Institutes' },
  ];

  return (
    <div className="py-10 bg-center bg-cover" style={bgBannerImage}>
      <div className="max-w-6xl mx-auto px-4 h-[64px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-[36px] leading-[36px] text-[#fff] font-bold">
              <CountUp end={item.count} duration={2} />+
            </h2>
            <p className="text-[16px] leading-[16px] mt-[12px] text-[#E9E9E9]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

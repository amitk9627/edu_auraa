import React from "react";
import Promo1 from "../../assets/images/Promo1.svg";
import Promo2 from "../../assets/images/Promo2.svg";

const PromoCards = () => {
  const cards = [
    {
      title: "Get 50% Off On Top UPSC Centers",
      subtitle: "Offline + Online Hybrid Batches Available Now",
      bg: "bg-orange-50",
      img: Promo1,
    },
    {
      title: "Get 50% Off On Top UPSC Centers",
      subtitle: "Offline + Online Hybrid Batches Available Now",
      bg: "bg-blue-100",
      img: Promo2,
    },
  ];

  return (
    <div className="max-md:px-4">
      <h3 className="text-[32px]  max-md:text-[24px]  leading-[36px] text-[#000000] font-semibold mb-[28px]">
      Popular  Coaching Institutes
      </h3>

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-xl p-6 max-md:p-3 flex h-[214px] max-md:h-[160px]  items-center justify-between shadow-sm`}
          >
            {/* Text Section */}
            <div className="w-[349px] max-md:w-[320px]">
              <h3 className="text-[24px] max-md:text-[18px] font-semibold text-[#333333]">
                {card.title}
              </h3>
              <p className="text-[18px] max-md:text-[14px] text-[#565E6D] mt-1">{card.subtitle}</p>
            </div>

            {/* Image */}
            <img src={card.img} alt="Promo" className="w-24 h-auto md:w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCards;

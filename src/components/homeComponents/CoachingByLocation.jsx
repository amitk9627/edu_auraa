import React from "react";
import delhi from "../../assets/images/delhi.svg";
const locations = [
  {
    name: "Delhi",
    subLocations: ["Patam", "Janakpuri", "HauzKhas", "Saket"],
    image: delhi,
  },
  {
    name: "Rajasthan",
    subLocations: ["Kota", "Jaipur", "Sikar", "Jodhpur"],
    image: delhi,
  },
  {
    name: "Kolkata",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Chennai",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Hyderabad",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Ahmedabad",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Bangalore",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Pune",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
  {
    name: "Goa",
    subLocations: ["Mumbai", "Jaipur", "Pune", "Kota"],
    image: delhi,
  },
];

const CoachingByLocation = () => {
  return (
      <div>
        <h2 className="text-[32px] leading-[36px] text-[#000000] font-semibold mb-[40px]">
          Popular Coaching Institutes by Location
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-lg shadow-sm p-4 space-x-4"
            >
              <div className="w-10 h-10 rounded-md bg-gray-200 overflow-hidden flex-shrink-0">
                {loc.image && (
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="font-medium text-[18px] leading-[18px] text-[#373737] mb-[12px]">{loc.name}</h3>
                <div className="text-[14px] leading-[14px] text-[#5E5BFB] space-x-1">
                  {loc.subLocations.map((subloc, i) => (
                    <span key={i}>
                      {subloc}
                      {i !== loc.subLocations.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CoachingByLocation;

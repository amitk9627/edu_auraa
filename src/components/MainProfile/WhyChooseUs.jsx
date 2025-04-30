import React from 'react'

const WhyChooseUs = () => {
    const features = [
        "Live + Recorded Classes",
        "1-on-1 Doubt Solving",
        "Printed Study Materials",
        "Weekly Tests + Analysis",
        "Hostel Assistance Available",
        "24/7 Doubt Support",
      ];
  return (
    <div className="bg-white rounded p-4 shadow-sm text-sm text-gray-800">
    <h2 className="font-semibold text-gray-700 mb-4">Why Choose Us</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded" />
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default WhyChooseUs

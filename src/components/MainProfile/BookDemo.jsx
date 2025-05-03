import React from 'react'
import school from "../../assets/images/school.svg";
import location from "../../assets/images/location_on.svg";
import star from "../../assets/images/star_rate.svg";
import currency from "../../assets/images/currency.svg";

const BookDemo = () => {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
    <div className="flex items-center gap-2 text-gray-700">
      <img src={school} className="w-4 h-4" />
      <span className="font-medium">UPSC UPSC</span>
    </div>
    <div className="flex items-center gap-2 text-gray-600">
      <img src={location} className="w-4 h-4" />
      <span>Rajinder Nagar, New Delhi</span>
    </div>
    <div className="flex items-center gap-2 text-gray-600">
      <img src={star} className="w-4 h-4 text-yellow-500" />
      <span>4.7</span>
      <span className="text-xs text-gray-500">(2.1k reviews)</span>
    </div>
    <div className="flex items-center gap-2">
      <img src={currency} className="w-4 h-4" />
      <span className="font-medium">₹40K–₹1L</span>
      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-semibold">Save 26%</span>
    </div>
    <p className="text-xs text-gray-500">EMI Starting at ₹2,499/month</p>
    <button className="w-full bg-gray-700 text-white py-2 rounded text-sm">
      Book Your Demo
    </button>
  </div>
  )
}

export default BookDemo

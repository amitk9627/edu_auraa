import React from 'react'

const CoupinCode = () => {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
        <label className="text-sm font-medium block">Have a Coupon Code?</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your code"
            className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
          />
          <button className="bg-[#737373] text-white px-3 py-1.5 rounded text-sm">
            Apply Code
          </button>
        </div>
      </div>
  )
}

export default CoupinCode

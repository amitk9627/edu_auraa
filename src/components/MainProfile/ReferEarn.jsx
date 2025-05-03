import React from 'react'

const ReferEarn = () => {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
        <h4 className="text-sm font-semibold">Refer & Earn Rewards</h4>
        <p className="text-xs text-gray-600">
          Invite your friends to book a course on Eduauraa and earn ₹500 for each successful admission.
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value="https://eduauraa.com/invite/ABC123"
            className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-700 bg-gray-100"
          />
          <button className="bg-[#737373] text-white px-3 py-1.5 rounded text-sm flex items-center gap-1">
            Copy Link
          </button>
        </div>
        <p className="text-[11px] text-gray-500">
          Rewards will be credited within 7 days after your friend completes payment. No limit on how many friends you can refer.
        </p>
      </div>
  )
}

export default ReferEarn

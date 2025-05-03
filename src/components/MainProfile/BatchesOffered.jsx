import { useState } from "react";

const BatchesOffered = () => {
  const [selected, setSelected] = useState(2);

  const batches = [
    {
      id: 1,
      title: "UPSC Crash Batch",
      duration: "3 Months",
      description:
        "Accelerated program for last-minute revision and intensive test practice.",
      batches: ["Morning Batch: 07 AM - 10 AM", "Evening Batch: 05 PM - 08 PM"],
      startDate: "05 May 2025",
      mode: "Online + Offline",
      seatsLeft: 12,
      emi: "₹3,499/month",
      price: "From ₹3,499/month",
    },
    {
      id: 2,
      title: "UPSC Target Batch",
      duration: "6 Months",
      description:
        "Comprehensive coverage with a focus on mains answer writing and strategic preparation.",
      batches: ["Morning Batch: 07 AM - 10 AM", "Evening Batch: 05 PM - 08 PM"],
      startDate: "05 May 2025",
      mode: "Online + Offline",
      seatsLeft: 12,
      emi: "₹5,299/month",
      price: "From ₹5,299/month",
      tag: "MOST POPULAR",
    },
    {
      id: 3,
      title: "UPSC Foundation Batch",
      duration: "12 Months",
      description:
        "In-depth preparation covering all aspects from basics to interview readiness.",
      batches: ["Morning Batch: 07 AM - 10 AM", "Evening Batch: 05 PM - 08 PM"],
      startDate: "05 May 2025",
      mode: "Online + Offline",
      seatsLeft: 12,
      emi: "₹7,999/month",
      price: "From ₹7,999/month",
    },
    {
      id: 4,
      title: "UPSC Foundation Batch",
      duration: "12 Months",
      description:
        "In-depth preparation covering all aspects from basics to interview readiness.",
      batches: ["Morning Batch: 07 AM - 10 AM", "Evening Batch: 05 PM - 08 PM"],
      startDate: "05 May 2025",
      mode: "Online + Offline",
      seatsLeft: 12,
      emi: "₹7,999/month",
      price: "From ₹7,999/month",
    },
  ];
  return (
    <div className="bg-[#f9f9f9] p-4 rounded  text-sm text-gray-800">
      <h2 className="font-semibold text-[24px] text-[#565E6D] mb-4">
        Batches Offered
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className={`relative border rounded bg-[#f9f9f9] p-4 ${
              selected === batch.id
                ? "border-[#E4E4E4] bg-[#f9f9f9]"
                : "border-gray-200 bg-[#f9f9f9]"
            }`}
          >
            {batch.tag && (
              <div className="absolute w-[100%] top-0 right-0 bg-gradient-to-r from-[#565E6D] to-[#A6B6D3] text-[#fff] text-center text-[14px] font-semibold px-2 py-0.5 rounded-bl">
                {batch.tag}
              </div>
            )}

            <div className="flex justify-between mb-1 mt-[20px]">
              <p className="font-semibold text-[24px] text-[#565E6D]">
                {batch.title} {""} – {batch.duration}
              </p>
              <input
                type="radio"
                checked={selected === batch.id}
                onChange={() => setSelected(batch.id)}
              />
            </div>

            <p className="text-[#565E6D] text-[14px] leading-[24px] mb-[16px]">
              {batch.description}
            </p>

            <ul className="mb-[8px] space-y-[8px]">
              {batch.batches.map((slot, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-[18px] leading-[28px] gap-2 text-[#565E6D]"
                >
                  <input
                    type="radio"
                    name="batchSlot"
                    value={slot}
                    className="accent-blue-600"
                  />
                  {slot}
                </li>
              ))}
            </ul>

            <ul className="text-[#565E6D] mb-[8px] space-y-1 text-[18px] leading-[28px]">
              <li>Start Date: {batch.startDate}</li>
              <li>Mode: {batch.mode}</li>
              <li>{batch.seatsLeft} Seats Left</li>
            </ul>

            <p className="text-[18px] leading-[28px] text-[#565E6D] mb-[16px]">
              EMI from {batch.emi}
            </p>

            <button className="w-full bg-[#55BFEB] text-white text-[14px] leading-[20px] py-[10px] rounded">
              Select Batch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchesOffered;

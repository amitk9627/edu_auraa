import React from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import Profile from "../Profile";
const Batches = () => {
  const batchData = [
    {
      batchName: "UPSC",
      startDate: "01-May-25",
      endDate: "31-Dec-25",
      days: "Mon, Wed, Fri",
      seats: 30,
    },
    {
      batchName: "SSC",
      startDate: "05-May-25",
      endDate: "30-Nov-25",
      days: "Tue, Thu, Sat",
      seats: 25,
    },
    {
      batchName: "Banking",
      startDate: "10-May-25",
      endDate: "31-Dec-25",
      days: "Mon, Wed, Fri",
      seats: 40,
    },
    {
      batchName: "Railways",
      startDate: "15-May-25",
      endDate: "30-Sep-25",
      days: "Sat, Sun",
      seats: 20,
    },
    {
      batchName: "Defence",
      startDate: "20-May-25",
      endDate: "31-Oct-25",
      days: "Mon, Tue",
      seats: 35,
    },
    {
      batchName: "CA Foundation",
      startDate: "01-Jun-25",
      endDate: "31-Dec-25",
      days: "Wed, Fri",
      seats: 50,
    },
    {
      batchName: "UPSC Optional",
      startDate: "05-Jun-25",
      endDate: "31-Dec-25",
      days: "Mon, Thu",
      seats: 15,
    },
    {
      batchName: "Law Entrance",
      startDate: "10-Jun-25",
      endDate: "30-Nov-25",
      days: "Tue, Thu",
      seats: 45,
    },
    {
      batchName: "NDA",
      startDate: "15-Jun-25",
      endDate: "30-Nov-25",
      days: "Sat, Sun",
      seats: 28,
    },
    {
      batchName: "UPSC Prelims",
      startDate: "20-Jun-25",
      endDate: "31-Dec-25",
      days: "Mon, Wed, Fri",
      seats: 32,
    },
  ];

  return ( 
    <div>
      <Profile>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[#000000] text-[20px] font-semibold">
              Batch Management
            </div>
            <button className="font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2">
              <span className="px-1 text-[16px]">+</span> Add Batch
            </button>
          </div>
          <div className="overflow-x-auto overflow-y-auto  h-[400px] pt-3">
            <table className="min-w-full">
              <thead className="relative">
                <tr className="sticky top-0 z-10 bg-white text-left text-[#000000] text-[14px] font-semibold">
                  <th className="py-3">Batch Name</th>
                  <th className="py-3">Start Date</th>
                  <th className="py-3">End Date</th>
                  <th className="py-3">Days</th>
                  <th className="py-3">Seats</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {batchData?.map((item, index) => (
                  <tr key={index} className="">
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.batchName}
                    </td>
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.startDate}
                    </td>
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.endDate}
                    </td>
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.days}
                    </td>
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.seats}
                    </td>
                    <td className="py-3 space-x-2 text-[24px] text-[#757575]">
                      <button className="cursor-pointer">
                        <RiPencilLine />
                      </button>
                      <button className="cursor-pointer">
                        <MdOutlineDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3 font-medium pt-5">
            <button className="w-full px-3 py-3 border rounded-[6px] border-[#565E6D] text-[#565E6D] cursor-pointer">
              Back
            </button>
            <button className="w-full px-3 py-3 rounded-[6px] text-[#FFFFFF] bg-[#565E6D] cursor-pointer">
              Save & Proceed
            </button>
          </div>
        </div>
      </Profile>
    </div>
  );
};

export default Batches;

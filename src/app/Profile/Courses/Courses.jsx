import React, { useState } from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import Profile from "../Profile";
import ClearIcon from "@mui/icons-material/Clear";
const Courses = () => {
  const [addCourse, setAddCourses] = useState(false);
  const courses = [
    {
      courseName: "UPSC",
      examType: "National Exam",
      mode: "Hybrid",
      duration: "1 Year",
    },
    {
      courseName: "NEET",
      examType: "National Exam",
      mode: "Offline",
      duration: "6 Months",
    },
    {
      courseName: "CET",
      examType: "State Exam",
      mode: "Online",
      duration: "3 Months",
    },
    {
      courseName: "JEE",
      examType: "National Exam",
      mode: "Hybrid",
      duration: "2 Years",
    },
    {
      courseName: "GATE",
      examType: "National Exam",
      mode: "Online",
      duration: "1 Year",
    },
    {
      courseName: "CAT",
      examType: "National Exam",
      mode: "Offline",
      duration: "6 Months",
    },
    {
      courseName: "SSC CGL",
      examType: "National Exam",
      mode: "Online",
      duration: "1 Year",
    },
    {
      courseName: "Bank PO",
      examType: "National Exam",
      mode: "Offline",
      duration: "6 Months",
    },
    {
      courseName: "MPSC",
      examType: "State Exam",
      mode: "Hybrid",
      duration: "1 Year",
    },
    {
      courseName: "CLAT",
      examType: "National Exam",
      mode: "Online",
      duration: "6 Months",
    },
  ];

  return (
    <div>
      <Profile>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[#000000] text-[20px] font-semibold">
              Course Management
            </div>
            <button onClick={()=>setAddCourses(!addCourse)
            } className="font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2">
              {!addCourse ? (
                <>
                  <span className="px-1 text-[16px]">+</span> Add Course
                </>
              ) : (
                <ClearIcon />
              )}
            </button>
          </div>
          {addCourse ? (
            <div className="flex flex-col gap-3">
              <div className="relative">
                {/* <img src={profile} alt="profileIcon" className="size-[60px]" />
                <img
                  src={camera}
                  alt="cameraIcon"
                  className="size-[20px] absolute left-[5%] bottom-[1%]"
                /> .*/}
              </div>
              <input
                type="text"
                placeholder="Institute Name (pre-filled)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Tagline / Motto"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Current Location (Auto-detect or search dropdown) - Prefilled"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter Your Contact  Number"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter Your Email ID"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Total Students (Range : Dropdown)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <textarea
                type="text"
                placeholder="About Institute (textarea)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <div className="w-[70%] flex gap-4">
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
                  Skip
                </button>
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] ">
                  Save & Proceed
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto overflow-y-auto  h-[400px] pt-3">
              <table className="min-w-full">
                <thead className="relative">
                  <tr className="sticky top-0 z-10 bg-white text-left text-[#000000] text-[14px] font-semibold">
                    <th className="py-3">Course Name</th>
                    <th className="py-3">Exam Type</th>
                    <th className="py-3">Mode</th>
                    <th className="py-3">Duration</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses?.map((item, index) => (
                    <tr key={index} className="">
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.courseName}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.examType}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.mode}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.duration}
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
          )}
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

export default Courses;

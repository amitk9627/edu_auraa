import React, { useState } from "react";
import Profile from "../Profile";
import profileImg from "../../../assets/images/profile-dummy.svg";
import profile from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import camera from "../../../assets/images/camera-icon.svg";
import ClearIcon from "@mui/icons-material/Clear";

const Faculty = () => {
  const [addFaculty, setAddFaculty] = useState(false);
  const data = [
    {
      photo: profileImg,
      name: "John Doe",
      subject: "Mathematics",
      experience: "5 Years",
      linkedCourses: "Algebra, Geometry",
    },
    {
      photo: profileImg,
      name: "Jane Smith",
      subject: "Physics",
      experience: "3 Years",
      linkedCourses: "Mechanics",
    },
    {
      photo: profileImg,
      name: "Jane Smith",
      subject: "Physics",
      experience: "3 Years",
      linkedCourses: "Mechanics",
    },
    {
      photo: profileImg,
      name: "Jane Smith",
      subject: "Physics",
      experience: "3 Years",
      linkedCourses: "Mechanics",
    },
    {
      photo: profileImg,
      name: "Jane Smith",
      subject: "Physics",
      experience: "3 Years",
      linkedCourses: "Mechanics",
    },
    // {
    //   photo: profileImg,
    //   name: "Jane Smith",
    //   subject: "Physics",
    //   experience: "3 Years",
    //   linkedCourses: "Mechanics",
    // },
  ];

  return (
    <div className="">
      <Profile>
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-[#000000] text-[20px] font-semibold">
              Faculty Management
            </div>
            <button
              onClick={() => setAddFaculty(!addFaculty)}
              className="font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2"
            >
              {!addFaculty ? (
                <>
                  <span className="px-1 text-[16px]">+</span> Add Faculty
                </>
              ) : (
                <ClearIcon />
              )}
            </button>
          </div>
          {addFaculty ? (
            <div>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <img
                    src={profile}
                    alt="profileIcon"
                    className="size-[60px]"
                  />
                  <img
                    src={camera}
                    alt="cameraIcon"
                    className="size-[20px] absolute left-[5%] bottom-[1%]"
                  />
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
            </div>
          ) : (
            <div className="overflow-x-auto overflow-y-auto  h-[400px] pt-3">
              <table className="min-w-full">
                <thead className="relative">
                  <tr className="sticky top-0 z-10 bg-white text-left text-[#000000] text-[14px] font-semibold">
                    <th className="py-3">Photo</th>
                    <th className="py-3">Name</th>
                    <th className="py-3">Subject</th>
                    <th className="py-3">Experience</th>
                    <th className="py-3">Linked Courses</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index} className="">
                      <td className="py-3 pr-4">
                        {/* <img
                            src={item.photo}
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                            /> */}
                        <div className="bg-[#ECECEC] size-[42px] flex items-center justify-center text-[#0000003D]">
                          <MdOutlineImage />
                        </div>
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.name}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.subject}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.experience}
                      </td>
                      <td className="py-3 text-[14px] text-[#000000] font-medium">
                        {item.linkedCourses}
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

export default Faculty;

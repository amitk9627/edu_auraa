import React, { useState } from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};
const Courses = ({ setValue }) => {
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
  // ------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#000000] text-[20px] font-semibold">
            Course Management
          </div>
          <button
            onClick={() => setAddCourses(!addCourse)}
            className="font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2"
          >
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
            <input
              type="text"
              placeholder="Enter Course Name (e.g., NEET, UPSC) Dropdown"
              className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
            />
            <input
              type="text"
              placeholder="Exam Type (dropdown"
              className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
            />
            <input
              type="text"
              placeholder="Enter Mode: Online / Offline / Hybrid (Dropdown)"
              className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
            />
            <input
              type="text"
              placeholder="Enter Duration (e.g., 3months, 6 months, 1 year) Dropdown"
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
                      <button className="cursor-pointer" onClick={handleOpen}>
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
            <div className="w-[70%] flex gap-4">
              <button
                onClick={() => setValue(1)}
                className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]"
              >
                Back
              </button>
              <button
                onClick={() => setValue(3)}
                className="cursor-pointer py-2 w-full flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] "
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            courses
          </Typography>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Enter Course Name (e.g., NEET, UPSC) Dropdown"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Exam Type (dropdown"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter Mode: Online / Offline / Hybrid (Dropdown)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter Duration (e.g., 3months, 6 months, 1 year) Dropdown"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <div className=" flex gap-4">
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
                  cancel{" "}
                </button>
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] ">
                  update
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Courses;

import React, { useState } from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { Box, Typography, Modal } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const Batches = ({setValue}) => {
  const [addBatch, setAddBatch] = useState(false);
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
  // ------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#000000] text-[20px] font-semibold">
            Batch Management
          </div>
          <button
            onClick={() => setAddBatch(!addBatch)}
            className="font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2"
          >
            {!addBatch ? (
              <>
                <span className="px-1 text-[16px]">+</span> Add Batch
              </>
            ) : (
              <ClearIcon />
            )}
          </button>
        </div>
        {addBatch ? (
          <div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Batch Name (e.g., 'UPSC Evening Batch')"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="date"
                placeholder="Start Date"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="date"
                placeholder="End Date"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Days of Classes (checkboxes: Mon–Sun)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="time"
                placeholder="Time Slot (e.g., 6 PM – 8 PM)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Seats Available"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Faculty Assigned (dropdown)"
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
                onClick={() => setValue(2)}
                className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]"
              >
                Back
              </button>
              <button
                onClick={() => setValue(4)}
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
            Batch
          </Typography>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Batch Name (e.g., 'UPSC Evening Batch')"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="date"
                placeholder="Start Date"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="date"
                placeholder="End Date"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Days of Classes (checkboxes: Mon–Sun)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="time"
                placeholder="Time Slot (e.g., 6 PM – 8 PM)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Seats Available"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Faculty Assigned (dropdown)"
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

export default Batches;

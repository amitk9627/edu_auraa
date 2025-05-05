import React, { useEffect, useState } from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormControl,
  Box,
  Typography,
  Modal,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { backendUrl } from "../../../config/";
import { useSelector, useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Batches = ({ setValue }) => {
  // /app/v1/batches/addUpdateBatch
  const [addBatch, setAddBatch] = useState(false);
  const { instituteId, email } = useSelector((store) => store.User);
  const [allFaculty, setAllFaculty] = useState([]);
  const [formData, setFormData] = useState({
    batchName: "",
    startDate: "",
    endDate: "",
    daysOfClasses: [],
    timeSlot: { startTime: "", endTime: "" },
    seatsAvailable: "",
    facultyAssigned: "",
  });
  const [batchData, setBatchData] = useState([]);

  // ------------------
  const [selectedDays, setSelectedDays] = useState([]);
  useEffect(() => {
    // /getBatch/:instituteId
    axios
      .get(`${backendUrl}/app/v1/batches/getBatch/${instituteId}`)
      .then(({ data }) => {
        // console.log(data.BatchList);
        setBatchData(data.BatchList);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${backendUrl}/app/v1/faculty/getFaculty/${instituteId}`)
      .then(({ data }) => {
        // console.log(data);
        setAllFaculty(data.facultyList);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleWeekChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add day to array
      setSelectedDays((prev) => [...prev, value]);
    } else {
      // Remove day from array
      setSelectedDays((prev) => prev.filter((day) => day !== value));
    }
  };
  // ------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // instituteId: { type: String, required: true },
  // batchName: { type: String, required: true },
  // startDate: { type: Date, required: true },
  // endDate: { type: Date, required: true },
  // daysOfClasses: { type: [String] },
  // timeSlot: { startTime: String, endTime: String },
  // seatsAvailable: { type: Number },
  // facultyAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'faculty', default: null }
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.batchName) newErrors.batchName = "Batch Name is required";
    if (!formData.startDate) newErrors.startDate = "Start Date is required";
    if (!formData.endDate) newErrors.endDate = "End Date is required";
    if (selectedDays.length === 0)
      newErrors.selectedDays = "At least one day must be selected";
    if (!formData.timeSlot.startTime)
      newErrors.startTime = "Start Time is required";
    if (!formData.timeSlot.endTime) newErrors.endTime = "End Time is required";
    if (!formData.facultyAssigned)
      newErrors.facultyAssigned = "Faculty must be selected";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;

    // Proceed with API call
    try {
      const response = await axios.post(
        `${backendUrl}/app/v1/batches/addUpdateBatch`,
        {
          instituteId: instituteId,
          batchName: formData.batchName,
          startDate: formData.startDate,
          endDate: formData.endDate,
          daysOfClasses: selectedDays,
          timeSlot: formData.timeSlot,
          seatsAvailable: formData.seatsAvailable,
          facultyAssigned: formData.facultyAssigned,
        }
      );
      if (response.data.success) {
        console.log("Success:", response.data);
        setSelectedDays([]);
        setFormData({
          batchName: "",
          startDate: "",
          endDate: "",
          daysOfClasses: [],
          timeSlot: { startTime: "", endTime: "" },
          seatsAvailable: "",
          facultyAssigned: "",
        });
      }

      // Redirect or show success toast here
    } catch (err) {
      console.error("Error:", err);
      // Show error toast here
    }
  };

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
                value={formData.batchName}
                onChange={(e) =>
                  setFormData({ ...formData, batchName: e.target.value })
                }
                placeholder="Batch Name (e.g., 'UPSC Evening Batch')"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <TextField
                label="Start Date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                type="date"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <TextField
                label="End Date"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                type="date"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />

              {/* <input
                type="text"
                placeholder="Days of Classes (checkboxes: Mon–Sun)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              /> */}
              <FormControl component="fieldset" className="w-[70%]">
                <FormLabel component="legend">
                  Select Days of the Week
                </FormLabel>
                <FormGroup row>
                  {daysOfWeek.map((day) => (
                    <FormControlLabel
                      key={day}
                      control={
                        <Checkbox
                          value={day}
                          checked={selectedDays.includes(day)}
                          onChange={handleWeekChange}
                        />
                      }
                      label={day}
                    />
                  ))}
                </FormGroup>

                {/* Show selected days */}
                <Typography sx={{ mt: 2 }} className="text-md">
                  Selected Days: {JSON.stringify(selectedDays)}
                </Typography>
              </FormControl>
              <TextField
                label="Start Time"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                value={formData.timeSlot.startTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeSlot: {
                      ...formData.timeSlot,
                      startTime: e.target.value,
                    },
                  })
                }
                type="time"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              {/* <input
                type="time"
                placeholder="Time Slot (e.g., 6 PM – 8 PM)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              /> */}
              <TextField
                label="End Time"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                value={formData.timeSlot.endTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    timeSlot: { ...formData.timeSlot, endTime: e.target.value },
                  })
                }
                type="time"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="number"
                value={formData.seatsAvailable}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seatsAvailable: e.target.value,
                  })
                }
                placeholder="Seats Available"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              {/* <input
                type="text"
                placeholder="Faculty Assigned (dropdown)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              /> */}
              <FormControl className="w-[70%]">
                <InputLabel id="demo-simple-select-label">
                  Select Cources
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.facultyAssigned}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      facultyAssigned: e.target.value,
                    })
                  }
                  label="Select Cource"
                >
                  {allFaculty.map((item, key) => (
                    <MenuItem key={key} value={item._id}>
                      {item.facultyName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="w-[70%] flex gap-4">
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
                  Skip
                </button>
                <button
                  onClick={handleSubmit}
                  className="cursor-pointer py-2 w-full flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] "
                >
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
                      {item.daysOfClasses.map((val, i)=><span key={i}>{val.slice(0,3)},</span>)}
                    </td>
                    <td className="py-3 text-[14px] text-[#000000] font-medium">
                      {item.seatsAvailable}
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
              {/* <input
                type="text"
                placeholder="Days of Classes (checkboxes: Mon–Sun)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              /> */}
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Select Days of the Week
                </FormLabel>
                <FormGroup row>
                  {daysOfWeek.map((day) => (
                    <FormControlLabel
                      key={day}
                      control={
                        <Checkbox
                          value={day}
                          checked={selectedDays.includes(day)}
                          onChange={handleWeekChange}
                        />
                      }
                      label={day}
                    />
                  ))}
                </FormGroup>

                {/* Show selected days */}
                <Typography sx={{ mt: 2 }}>
                  Selected Days: {JSON.stringify(selectedDays)}
                </Typography>
              </FormControl>
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

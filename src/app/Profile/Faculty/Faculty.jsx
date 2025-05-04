import React, { useState, useEffect } from "react";
import profileImg from "../../../assets/images/profile-dummy.svg";
import profile from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import camera from "../../../assets/images/camera-icon.svg";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Typography,
  Modal,
  FormControl,
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

const Faculty = ({ setValue }) => {
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

  const [courses, setCourses] = useState([]);
  // const []=useState([]),
  const { instituteId, email } = useSelector((store) => store.User);
  const [formData, setFormData] = useState({
    facultyName: "",
    subject: "",
    experience: "",
    linkedCourses: [],
    aboutFaculty: "",
    profile: "", // Assume this is a URL or base64 string
  });
  const [allFaculty, setAllFaculty] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendUrl}/app/v1/faculty/getFaculty/${instituteId}`)
      .then(({ data }) => {
        console.log(data);
        setAllFaculty(data.facultyList);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${backendUrl}/app/v1/courses/getCourse/${instituteId}`)
      .then(({ data }) => {
        setCourses(data.CourseList);
      })
      .catch((err) => console.log(err));
  }, [instituteId]);

  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    console.log(formData);
    const errors = {};
    if (!formData.facultyName.trim()) errors.name = "Name is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.experience.trim())
      errors.experience = "Experience is required";
    if (formData.linkedCourses.length == 0)
      errors.linkedCourses = "Linked courses required";
    if (!formData.aboutFaculty.trim())
      errors.about = "About section is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // -----------

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ---------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = async () => {
    if (validateForm()) {
      // setCourses((prev) => [...prev, formData]);
      const res = await axios.post(
        `${backendUrl}/app/v1/faculty/addUpdateFaculty`,
        {
          instituteId: instituteId,
          facultyName: formData.facultyName,
          subject: formData.subject,
          experience: formData.experience,
          aboutFaculty: formData.aboutFaculty,
          profile: "http", // Assume this is a URL or base64 string
          linkedCourses: formData.linkedCourses,
        }
      );
      console.log(res.data);
      setFormData({
        facultyName: "",
        subject: "",
        experience: "",
        linkedCourses: [],
        aboutFaculty: "",
        profile: "", // Assume this is a URL or base64 string
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
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
                <img src={profile} alt="profileIcon" className="size-[60px]" />
                <img
                  src={camera}
                  alt="cameraIcon"
                  className="size-[20px] absolute left-[5%] bottom-[1%]"
                />
              </div>
              <input
                type="text"
                value={formData.facultyName}
                onChange={(e) =>
                  setFormData({ ...formData, facultyName: e.target.value })
                }
                placeholder="Faculty Name (pre-filled)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Subject Taught (multi Select dropdown)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                placeholder="Enter your Experience (years)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <FormControl className="w-[70%]">
                <InputLabel id="demo-simple-select-label">
                  Select Cources
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.linkedCourses}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      linkedCourses: [
                        ...formData.linkedCourses,
                        e.target.value,
                      ],
                    })
                  }
                  label="Select Cource"
                >
                  {courses.map((item, key) => (
                    <MenuItem key={key} value={item.courseName}>
                      {item.courseName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div>
                {formData.linkedCourses.length > 0 && (
                  <>
                    {formData.linkedCourses?.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </>
                )}
              </div>
              <textarea
                type="text"
                value={formData.aboutFaculty}
                onChange={(e) =>
                  setFormData({ ...formData, aboutFaculty: e.target.value })
                }
                placeholder="About Faculty (textarea)"
                className="w-[70%] px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <div className="w-[70%] flex gap-4">
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
                  Skip
                </button>
                <button
                  onClick={handleSave}
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
                  <th className="py-3">Photo</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Subject</th>
                  <th className="py-3">Experience</th>
                  <th className="py-3">Linked Courses</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allFaculty?.map((item, index) => (
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
                      {item.facultyName}
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
                onClick={() => setValue(0)}
                className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]"
              >
                Back
              </button>
              <button
                onClick={() => setValue(2)}
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
            Faculty
          </Typography>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <img src={profile} alt="profileIcon" className="size-[60px]" />
                <img
                  src={camera}
                  alt="cameraIcon"
                  className="size-[20px] absolute left-[5%] bottom-[1%]"
                />
              </div>
              <input
                type="text"
                placeholder="Faculty Name (pre-filled)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Subject Taught (multi Select dropdown)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter your Experience (years)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <input
                type="text"
                placeholder="Enter Your Linked Courses (multi-select)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <textarea
                type="text"
                placeholder="About Faculty (textarea)"
                className=" px-4 py-4 border-[1px] border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
              />
              <div className=" flex gap-4">
                <button className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px] border-[1px_solid_#5E5BFB]">
                  cancel
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

export default Faculty;

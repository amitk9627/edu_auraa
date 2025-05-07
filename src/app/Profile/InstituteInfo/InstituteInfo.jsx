import React, { useState, useEffect } from "react";
import profile from "../../../assets/images/profile-dummy.svg";
import camera from "../../../assets/images/camera-icon.svg";
import { backendUrl } from "../../../config/";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FormControl, InputAdornment, TextField } from "@mui/material";
const InstituteInfo = ({ setValue }) => {
  const [formData, setFormData] = useState({
    instituteName: "",
    tagline: "",
    location: "",
    contactNumber: "",
    email: "",
    totalStudents: "",
    aboutInstitute: "",
  });
  const { instituteId, email } = useSelector((store) => store.User);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!formData.instituteName.trim()) newErrors.instituteName = "Required";
    if (!formData.tagline.trim()) newErrors.tagline = "Required";
    if (!formData.location.trim()) newErrors.location = "Required";
    if (!/^[0-9]{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Valid number required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.totalStudents) newErrors.totalStudents = "Required";
    if (!formData.aboutInstitute.trim()) newErrors.aboutInstitute = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    axios
      .get(`${backendUrl}/app/v1/institute/getInstitute/${email}`)
      .then(({ data }) => {
        //  console.log(data.institute);
        setFormData({
          instituteName: data.institute.instituteName,
          tagline: data.institute.tagline,
          location: data.institute.location,
          contactNumber: data.institute.contact,
          email: data.institute.email,
          totalStudents: data.institute.totalStudents,
          aboutInstitute: data.institute.aboutInstitue,
        });
      })
      .catch((err) => console.log(err));
  }, [instituteId]);

  const handleSubmit = async () => {
    if (!validateFields()) return;
    try {
      const res = await axios.post(
        `${backendUrl}/app/v1/institute/addUpdateInstitute`,
        {
          instituteId: instituteId,
          instituteName: formData.instituteName.trim(),
          profile:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s", // Assume this is a URL or base64 string
          tagline: formData.tagline.trim(),
          location: formData.location.trim(),
          email: formData.email.trim(),
          contact: formData.contactNumber,
          totalStudents: formData.totalStudents,
          aboutInstitue: formData.aboutInstitute.trim(),
        }
      );
      // console.log(res);
      if (res.ok) {
        setValue(1);
      }
    } catch (err) {
      console.log(err);
      alert("Network error");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={profile} alt="profileIcon" className="size-[60px]" />
        <img
          src={camera}
          alt="cameraIcon"
          className="size-[20px] absolute left-[5%] bottom-[1%]"
        />
      </div>
      {instituteId}
      <FormControl>
        <TextField
          type="text"
          label="Enter Location"
          variant="outlined"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
        />
        {errors.instituteName && (
          <span className="text-red-500 text-sm">{errors.instituteName}</span>
        )}
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          label="Enter Location"
          variant="outlined"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
        />
        {errors.tagline && (
          <span className="text-red-500 text-sm">{errors.tagline}</span>
        )}
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          label="Enter Location"
          variant="outlined"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        {errors.location && (
          <span className="text-red-500 text-sm">{errors.location}</span>
        )}
      </FormControl>
      <FormControl>
        <TextField
          type="number"
          label="Enter Your Contact  Number"
          variant="outlined"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
        {errors.contactNumber && (
          <span className="text-red-500 text-sm">{errors.contactNumber}</span>
        )}
      </FormControl>
      <FormControl>
        <TextField
          type="email"
          label="Enter Your Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </FormControl>

      <FormControl>
        <TextField
          type="number"
          label="Total Students"
          variant="outlined"
          name="totalStudents"
          value={formData.totalStudents}
          onChange={handleChange}
        />
        {errors.totalStudents && (
          <span className="text-red-500 text-sm">{errors.totalStudents}</span>
        )}
      </FormControl>

      <FormControl>
        <TextField
          type="text"
          label="About Institute"
          variant="outlined"
          name="aboutInstitute"
          value={formData.aboutInstitute}
          onChange={handleChange}
          columns={3}
        />
        {errors.aboutInstitute && (
          <span className="text-red-500 text-sm">{errors.aboutInstitute}</span>
        )}
      </FormControl>

      <div className="w-[70%] flex gap-4">
        <button
          type="button"
          className="cursor-pointer py-2 w-full flex items-center justify-center text-[#5E5BFB] border rounded-[8px]  border-[#5E5BFB]"
        >
          Skip
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="cursor-pointer py-2 w-full flex items-center justify-center text-white rounded-[8px] bg-[#5E5BFB]"
        >
          Save & Proceed
        </button>
      </div>
    </div>
  );
};

export default InstituteInfo;

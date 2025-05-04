import React, { useState, useEffect } from "react";
import profile from "../../../assets/images/profile-dummy.svg";
import camera from "../../../assets/images/camera-icon.svg";
import { backendUrl } from "../../../config/";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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
  const { instituteId, email} = useSelector((store) => store.User);
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
    if (!formData.totalStudents.trim()) newErrors.totalStudents = "Required";
    if (!formData.aboutInstitute.trim()) newErrors.aboutInstitute = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    axios
      .get(`${backendUrl}/app/v1/institute/getInstitute/${email}`)
      .then(({data}) =>{
        //  console.log(data.institute);
         setFormData({
          instituteName: data.institute.instituteName,
          tagline: data.institute.tagline,
          location: data.institute.location,
          contactNumber: data.institute.contact,
          email: data.institute.email,
          totalStudents: data.institute.totalStudents,
          aboutInstitute: data.institute.aboutInstitue,
        })
      //    {
      //     "_id": "68177c6e6f8e64f3ce8c5503",
      //     "instituteId": "INS1746369646400",
      //     "instituteName": "RMS School",
      //     "profile": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      //     "tagline": "jai hind",
      //     "location": "sector 15",
      //     "contact": "7267033009",
      //     "email": "akgzp56@gmail.com",
      //     "totalStudents": 500,
      //     "aboutInstitue": "thisis testing",
      //     "isActive": true,
      //     "createdAt": "2025-05-04T14:40:46.415Z",
      //     "updatedAt": "2025-05-04T14:40:46.415Z",
      //     "__v": 0
      // }
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
          email: formData.email,
          contact: formData.contactNumber,
          totalStudents: formData.totalStudents.trim(),
          aboutInstitue: formData.aboutInstitute.trim(),
        }
      );
      // console.log(res);
      if (res.ok) {
        alert("Saved successfully");
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
      <input
        type="text"
        name="instituteName"
        value={formData.instituteName}
        onChange={handleChange}
        placeholder="Institute Name (pre-filled)"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.instituteName && (
        <span className="text-red-500 text-sm">{errors.instituteName}</span>
      )}

      <input
        type="text"
        name="tagline"
        value={formData.tagline}
        onChange={handleChange}
        placeholder="Tagline / Motto"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.tagline && (
        <span className="text-red-500 text-sm">{errors.tagline}</span>
      )}

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Current Location (Auto-detect or search dropdown) - Prefilled"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.location && (
        <span className="text-red-500 text-sm">{errors.location}</span>
      )}

      <input
        type="text"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        placeholder="Enter Your Contact  Number"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.contactNumber && (
        <span className="text-red-500 text-sm">{errors.contactNumber}</span>
      )}

      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter Your Email ID"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email}</span>
      )}

      <input
        type="text"
        name="totalStudents"
        value={formData.totalStudents}
        onChange={handleChange}
        placeholder="Total Students (Range : Dropdown)"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.totalStudents && (
        <span className="text-red-500 text-sm">{errors.totalStudents}</span>
      )}

      <textarea
        name="aboutInstitute"
        value={formData.aboutInstitute}
        onChange={handleChange}
        placeholder="About Institute (textarea)"
        className="w-[70%] px-4 py-4 border border-[#D9D9D9] rounded-[8px] placeholder:text-[#B3B3B3] outline-0"
      />
      {errors.aboutInstitute && (
        <span className="text-red-500 text-sm">{errors.aboutInstitute}</span>
      )}

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

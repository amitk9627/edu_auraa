import React, { useEffect, useState } from 'react';
import mentorImage from "../../assets/MainProfileImages/mentor.svg";
import axios from "axios";
import { backendUrl } from "../../config";
import { useSelector, useDispatch } from "react-redux";

const MentorsSection = () => {
const [mentors, setMentors]=useState([]);
  const { instituteId } = useSelector((store) => store.User);
    useEffect(() => {
      axios
        .get(`${backendUrl}/app/v1/faculty/getFaculty/${instituteId}`)
        .then(({ data }) => {
          setMentors(data.facultyList);
        })
        .catch((err) => console.log(err));
    }, [instituteId]);

  return (
    <div className="py-10 bg-[#F9F9F9] text-gray-800">
      <h2 className="text-lg font-semibold mb-8 pl-[12px]">Meet Our Mentors</h2>
      <div className="grid grid-cols-3 justify-center gap-10 text-center">
        {mentors.map((m, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={mentorImage} alt={`${m.facultyName}`} className="mb-3" />
            <h3 className="font-semibold">{m.facultyName}</h3>
            <p className="text-sm text-gray-600">{m.subject}</p>
            <p className="text-xs text-gray-500">({m.experience})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;

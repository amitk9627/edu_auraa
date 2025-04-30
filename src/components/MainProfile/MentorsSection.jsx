import React from 'react';
import mentorImage from "../../assets/MainProfileImages/mentor.svg";

const MentorsSection = () => {
  const mentors = [
    { name: "Dr. S.K. Singh", subject: "Indian Polity", experience: "12 yrs exp." },
    { name: "Ms. Priya Mehra", subject: "History & Culture", experience: "8 yrs exp." },
    { name: "Mr. R. Dutt", subject: "Current Affairs & Essay", experience: "10 yrs exp." },
  ];

  return (
    <div className="py-10 bg-[#F9F9F9] text-gray-800">
      <h2 className="text-lg font-semibold mb-8 pl-[12px]">Meet Our Mentors</h2>
      <div className="grid grid-cols-3 justify-center gap-10 text-center">
        {mentors.map((m, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={mentorImage} alt={`${m.name}`} className="mb-3" />
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">{m.subject}</p>
            <p className="text-xs text-gray-500">({m.experience})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;

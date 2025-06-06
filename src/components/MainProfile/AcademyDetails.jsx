import React from "react";
import save from "../../assets/MainProfileImages/save.png";
import share from "../../assets/MainProfileImages/share.png";

const AcademyDetails = ({insData}) => {
  console.log(insData)
//   aboutInstitue
// contact
// createdAt
// email
// instituteId
// instituteName
// isActive
// location
// profile
// tagline
// totalStudents
// updatedAt
  return (
    <div className="flex justify-between items-start mt-[30px] md:px-0 px-[16px]">
      <div>
        <h1 className="text-[14px] md:text-2xlfont-bold text-gray-700">
          {insData.instituteName} – UPSC
        </h1>
        <p>{insData.tagline}</p>
      </div>
      <div className="flex space-x-2">
        <button className="flex items-center px-4 py-2 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100">
          <img className="w-[20px] h-[20px]" src={save}></img>
        </button>
        <button className="flex items-center px-4 py-2 border cursor-pointer rounded-md text-gray-700 hover:bg-gray-100">
        <img className="w-[20px] h-[20px]" src={share}></img>
        </button>
      </div>
    </div>
  );
};

export default AcademyDetails;

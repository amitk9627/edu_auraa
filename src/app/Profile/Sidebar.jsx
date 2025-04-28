import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const sideBar = [
    {name:"Institute Information", path: "institute-info"},
    {name:"Faculty Management", path: "faculty"},
    {name:"Courses", path: "courses"},
    {name:"Batches", path: "batches"},
    {name:"Media", path: "media"},
    {name:"Services Offered", path: "services"},   
  ];

  const [isActive, setIsActive] = React.useState(0);
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-4 items-start" name="sideBar">
      {sideBar.map((ele, index) => {
        return (
          <div
            className={`w-full text-[18px] text-[#000000] font-medium px-3 py-2 rounded-[8px] 
              ${isActive == index ? "bg-[#F4F4F4]" : ""}
               cursor-pointer`}
            onClick={() => {
                setIsActive(index)
                navigate(`/${ele.path}`)
            }}
          >
            {ele.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

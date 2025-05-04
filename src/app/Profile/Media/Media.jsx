import React from "react";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Media = () => {
  const navigate = useNavigate()
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="h-[124px] flex items-center justify-center border border-gray-700 rounded-2xl">
        <div>
          <p>Upload a files or drag and drop</p>
          <p>PNG, JPG, MP4 upto 50MB</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {data.map((item, i) => (
          <div key={i} className="relative rounded-lg">
            <button className="cursor-pointer absolute top-1 right-7 text-xl">
              <RiPencilLine />
            </button>
            <button className="cursor-pointer absolute top-1 right-1 text-xl">
              <MdOutlineDeleteOutline />
            </button>
            <img src={item.image} className="w-[140px] h-[140px]" />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end pt-2">

        <button
          onClick={() => navigate("/my-profile")}
          className="cursor-pointer py-2 w-[30%] flex items-center justify-center text-[#FFFFFF] rounded-[8px] bg-[#5E5BFB] "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Media;

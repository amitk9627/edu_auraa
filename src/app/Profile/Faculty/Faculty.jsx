import React from 'react'
import Profile from '../Profile'
import profileImg from "../../../assets/images/profile-dummy.svg";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";

const Faculty = () => {
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

  return (
    <div className=''>
        <Profile>
        <div className=''>
            <div className='flex justify-between items-center'>
                <div className='flex items-center text-[#000000] text-[20px] font-semibold'>Faculty Management</div>
                <button className='font-medium text-[#FFFFFF] text-[14px] cursor-poiter bg-[#315EAB] rounded-[6px] px-4 py-2'><span className='px-1 text-[16px]'>+</span> Add Faculty</button>
            </div>
            <div className="overflow-x-auto overflow-y-auto  h-[400px] pt-3">
                <table className="min-w-full">
                    <thead className='relative'>
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
                    {data?.map((item, index) => (
                        <tr key={index} className="">
                        <td className="py-3 pr-4">
                            {/* <img
                            src={item.photo}
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                            /> */}
                            <div className='bg-[#ECECEC] size-[42px] flex items-center justify-center text-[#0000003D]'><MdOutlineImage /></div>
                        </td>
                        <td className="py-3 text-[14px] text-[#000000] font-medium">{item.name}</td>
                        <td className="py-3 text-[14px] text-[#000000] font-medium">{item.subject}</td>
                        <td className="py-3 text-[14px] text-[#000000] font-medium">{item.experience}</td>
                        <td className="py-3 text-[14px] text-[#000000] font-medium">{item.linkedCourses}</td>
                        <td className="py-3 space-x-2 text-[24px] text-[#757575]">
                            <button className="cursor-pointer"><RiPencilLine /></button>
                            <button className="cursor-pointer"><MdOutlineDeleteOutline /></button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='flex gap-3 font-medium pt-5'>
                <button className='w-full px-3 py-3 border rounded-[6px] border-[#565E6D] text-[#565E6D] cursor-pointer'>Back</button>
                <button className='w-full px-3 py-3 rounded-[6px] text-[#FFFFFF] bg-[#565E6D] cursor-pointer'>Save & Proceed</button>
            </div>
        </div>
        </Profile>
    </div>
  )
}

export default Faculty
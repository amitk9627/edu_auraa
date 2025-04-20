import React from "react";
import Container from "../Container/Container";
import iit_jee  from "../../assets/images/iit_jee.svg";
import neet_ug  from "../../assets/images/neet_ug.svg";
import upsc  from "../../assets/images/upsc.svg";
import ssc  from "../../assets/images/ssc.svg";
import bank_exams  from "../../assets/images/bank_exams.svg";
import cat  from "../../assets/images/cat.svg";
import class_12  from "../../assets/images/class_12.svg";
import ca  from "../../assets/images/ca.svg";

const exams = [
  { title: "IIT JEE", icon: iit_jee },
  { title: "NEET UG", icon: neet_ug },
  { title: "UPSC CSE-GS", icon: upsc },
  { title: "SSC JE & State Exams", icon: ssc },
  { title: "Bank Exams", icon: bank_exams },
  { title: "CAT & other MBA entrance tests", icon: cat },
  { title: "CBSE Class-12", icon: class_12 },
  { title: "CA Intermediate", icon: ca },
];

const ExamCategoryGrid = () => {
  return (
    <div className="py-16 px-6">
        <Container>
      <div>
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Select your goal /exam
        </h2>
        <p className="text-sm text-gray-500 mb-10">
          <span className="text-indigo-600 font-medium">50+ </span>
          exams available for your preparation
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {exams.map((exam, idx) => (
            <div
              key={idx}
              className="border-[#DFDFDF] rounded-[8px] py-6 px-[37px] flex flex-col items-center justify-center text-center shadow-sm w-[276px] max-md:w-[160px] h-[276px] max-md:h-[144px] transition"
            >
              <img src={exam.icon} alt={exam.title} className="w-12 h-12 mb-4" />
              <h3 className="text-[16px] max-md:text-[12px] font-semibold text-[#000]">{exam.title}</h3>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default ExamCategoryGrid;

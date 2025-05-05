import React from "react";
import Container from "../Container/Container";
import ReviewsSection from "./ReviewsSection";
import ContactSection from "./ContactSection";
import ExploreCourses from "./ExploreCourses";
import BookDemo from "./BookDemo";
import CoupinCode from "./CoupinCode";
import ReferEarn from "./ReferEarn";
import BatchesOffered from "./BatchesOffered";
import WhyChooseUs from "./WhyChooseUs";
import MentorsSection from "./MentorsSection";

const Overview = ({insData}) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[16px] md:px-0">
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-[24px] font-bold mb-4 text-[#565E6D]">
              Overview
            </h2>
            <p className="text-[#565E6D] text-[18px] leading-[28px]">
              Chanakya IAS Academy is a leading institution dedicated to
              nurturing future civil servants with a strong foundation in
              academic excellence, strategic preparation, and ethical
              leadership. With over two decades of experience and a proven track
              record of successful candidates in UPSC, the academy offers
              comprehensive classroom and hybrid learning programs tailored for
              Prelims, Mains, and Interview preparation. Their expert faculty,
              updated study materials, and personalized mentorship model empower
              students from all backgrounds to compete with confidence. Whether
              you’re starting from scratch or refining your strategy, Chanakya
              IAS provides the discipline, support, and direction to help you
              succeed.
            </p>
          </section>
          <BatchesOffered />
          <MentorsSection />
          <WhyChooseUs />
          <ReviewsSection />
          <ContactSection />
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <BookDemo />
          <CoupinCode />
          <ReferEarn />
        </div>
      </div>
      <ExploreCourses />
    </Container>
  );
};

export default Overview;

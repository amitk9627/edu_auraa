import React from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/homeComponents/banner";
import Statistics from "../../components/homeComponents/statistics";
import CoachingInstitutes from "../../components/homeComponents/CoachingInstitutes";
import ExamCategoryGrid from "../../components/homeComponents/ExamCategoryGrid";
import SubscribeBanner from "../../components/homeComponents/SubscribeBanner";
import OfferCards from "../../components/homeComponents/OfferCards";
import CoachingByLocation from "../../components/homeComponents/CoachingByLocation";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/MainProfile/Gallery";
const Homepage = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Banner />
      <Statistics />
      <Container>
        <CoachingInstitutes />
        <OfferCards />
      </Container>
      <ExamCategoryGrid />

      <Container>
        <CoachingByLocation />
      </Container>
      <Container>
        <SubscribeBanner />
      </Container>
    </div>
  );
};

export default Homepage;

import React, { useState, useEffect } from "react";
import Gallery from "../../components/MainProfile/Gallery";
import Overview from "../../components/MainProfile/Overview";
import HeaderSearchBar from "../../components/MainProfile/HeaderSearchBar";
import { useSelector } from "react-redux";
import axios from "axios";
import { backendUrl } from "../../config";
const MainProfile = () => {
  const { instituteId, email } = useSelector((store) => store.User);
  const [insData, setInsData] = useState({});
  useEffect(() => {
    async function profileData() {
      try {
        const response = await axios.get(
          `${backendUrl}/app/v1/institute/getInstituteById/${instituteId}`
        );
        if (response.data.success) {
          console.log("Success:", response.data.result);
          setInsData(response.data.result);
        }

        // Redirect or show success toast here
      } catch (err) {
        console.error("Error:", err);
        // Show error toast here
      }
    }
    profileData();
  }, []);
  return (
    <div>
      {/* <div className="bg-[#F4F4F4] py-[24px]">
        <HeaderSearchBar />
      </div> */}
      <Gallery insData={insData} />
      <Overview insData={insData} />
    </div>
  );
};

export default MainProfile;

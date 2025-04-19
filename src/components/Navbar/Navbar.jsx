import React, { useState } from "react";
import logo from "../../assets/images/Studyshala.svg";
import Container from "../Container/Container";
import { Login } from "../Login/Login";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  // boxShadow: 24,
};
const HomeHeroSection = () => {
  const [loginState, setLoginState] = useState(false);
  const handleOpen = () => {
    // dispatch(openModal());
    setLoginState(true);
  };
  const handleClose = () => {
    // dispatch(closeModal());
    setLoginState(false);
  };
  return (
    <>
      <div className="bg-white">
        <Container>
          <nav className="flex items-center justify-between py-4 w-full">
            {/* Logo */}
            <img src={logo}></img>
            <div className="flex items-center space-x-[48px]">
              <div className="flex leading-[16px] items-center space-x-[28px] text-[16px] font-medium text-[#333333]">
                <a href="#" className="hover:text-indigo-600">
                  Institutes
                </a>
                <a href="#" className="hover:text-indigo-600">
                  About Us
                </a>
                <a href="#" className="hover:text-indigo-600">
                  Blogs
                </a>
                <a href="#" className="hover:text-indigo-600">
                  Contact
                </a>
              </div>
              <button
                onClick={() => handleOpen()}
                className="bg-[#5E5BFB] leading-[16px] text-white px-[20px] py-[18px] rounded-[8px] text-[18px] font-semibold hover:bg-indigo-700 transition"
              >
                Login or Create account
              </button>
            </div>
          </nav>
        </Container>
      </div>
      <Modal
        open={loginState}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={style}
          className={`border-none outline-none 
          "w-full"
            rounded-[22px] overflow-hidden`}
        >
          <div className="rounded-[20px] px-4">
            <Login onCloseModal={handleClose} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default HomeHeroSection;

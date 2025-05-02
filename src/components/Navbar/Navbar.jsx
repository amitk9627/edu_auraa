import React, { useState, useEffect } from "react";
import logo from "../../assets/images/websiteLogo.svg";
import Container from "../Container/Container";
import { Login } from "../Login/Login";
import LoginMobile from "../Login/LoginMobile";
import { Modal, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Drawer from "react-modern-drawer";
import { FaUserCircle } from "react-icons/fa";
import "react-modern-drawer/dist/index.css";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  // boxShadow: 24,
};
const Navbar = () => {
  const [loginState, setLoginState] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const userDetails = useSelector((store) => store.User);
  console.log(userDetails)
  const handleOpen = () => {
    setLoginState(true);
  };
  const handleClose = () => {
    setLoginState(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const showNavbarHandler = () => {
    if (windowDimensions.width > 1200) {
      return true; //SHOW NAVBAR
    } else {
      if (homeRoute == "/") {
        return true; //SHOW NAVBAR
      } else {
        return false; //HIDE NAVBAR
      }
    }
  };

  return (
    <>
      <div className="bg-white ">
        <Container>
          <nav className="flex items-center justify-between py-3 w-full">
            <button
              className=" absolute top-3 left-4 bg-transparent z-20 text-[28px] md:hidden"
              onClick={() => setIsSideDrawerOpen(true)}
            >
              <MdMenu className={`text-[#202020]`} />
            </button>

            {/* Logo */}
            <img src={logo} className="max-md:mx-auto max-md:h-6 h-20"></img>
            <div className="flex items-center space-x-[48px] max-md:hidden">
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
              {/* <>
                {userDetails?.userExist == false ? (
                  <>
                    <div
                      className="flex gap-2 bg-white rounded-[12px] px-2 py-4"
                      onClick={() => {
                        // setIsSideDrawerOpen(false);
                        handleOpen();
                      }}
                    >
                      <FaUserCircle className="text-[32px]" />
                      <div className="flex flex-col">
                        <span className="text-[16px] text-[#EE5901] font-medium">
                          Login/Register
                        </span>
                        <span className="text-[#727272] text-[14px] leading-[14px] font-normal">
                          Login for best deals & offers
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex gap-2 bg-white rounded-[12px] px-2 py-4">
                    <div className="flex justify-center items-center size-[56px]">
                      <span className="rounded-full p-2 h-8 w-8 bg-orange-600 flex items-center justify-center text-white font-semibold">
                        {String(userDetails?.firstName)[0] ?? "NA"}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0">
                      <span className="text-[16px] text-[#727272] font-medium">
                        {UserDetail.fields.name}
                      </span>
                      <span className="text-[12px] text-[#727272] font-medium">
                        {UserDetail.fields.number}
                      </span>
                      <span className="text-[12px] text-[#727272] font-medium ">
                        {UserDetail.fields.email}
                      </span>
                    </div>
                  </div>
                )}
              </> */}
              <p className="flex items-center gap-4">
                {userDetails?.userExist==false ? (
                  <button
                    onClick={() => handleOpen()}
                    className="border border-[#55BFEB] leading-[16px] text-[#55BFEB] px-[20px] py-[18px] rounded-[8px] text-[18px] font-semibold hover:bg-indigo-700 transition"
                  >
                    Login
                  </button>
                ) : (
                  <>
                    <div className="flex justify-center items-center size-[56px]">
                      <span className="rounded-full p-2 h-8 w-8 bg-orange-600 flex items-center justify-center text-white font-semibold">
                        {String(userDetails?.firstName)[0] ?? "NA"}
                      </span>
                    </div>
                  </>
                )}
                <Link
                  to="/institute-info"
                  // onClick={() => handleOpen()}
                  className="bg-[#55BFEB] leading-[16px] text-white px-[20px] py-[18px] rounded-[8px] text-[18px] font-semibold hover:bg-indigo-700 transition"
                >
                  List Your Coaching
                </Link>
              </p>
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
          ${windowDimensions.width < 1200 ? "w-full" : ""}
            rounded-[22px] overflow-hidden`}
        >
          <div className="rounded-[20px] px-4">
            {windowDimensions.width < 1200 ? (
              <LoginMobile onCloseModal={handleClose} />
            ) : (
              <Login onCloseModal={handleClose} />
            )}
          </div>
        </Box>
      </Modal>

      <Drawer
        open={isSideDrawerOpen}
        onClose={() => setIsSideDrawerOpen(false)}
        direction="left"
        className="bg-[#EDEDF3] md:hidden"
        size={316}
        zIndex={999}
      >
        <div className="flex flex-col gap-3 p-4 w-full h-full bg-[#EDEDF3] overflow-y-scroll">
          <>
            {userDetails?.userExist == false ? (
              <>
                <div
                  className="flex gap-2 bg-white rounded-[12px] px-2 py-4"
                  onClick={() => {
                    setIsSideDrawerOpen(false);
                    handleOpen();
                  }}
                >
                  <FaUserCircle className="text-[32px]" />
                  <div className="flex flex-col">
                    <span className="text-[16px] text-[#EE5901] font-medium">
                      Login/Register
                    </span>
                    <span className="text-[#727272] text-[14px] leading-[14px] font-normal">
                      Login for best deals & offers
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex gap-2 bg-white rounded-[12px] px-2 py-4">
                <div className="flex justify-center items-center size-[56px]">
                  <span className="rounded-full p-2 h-8 w-8 bg-orange-600 flex items-center justify-center text-white font-semibold">
                    {/* {String(UserDetail.fields.name)[0]} */}
                    Hello World
                  </span>
                </div>
              </div>
            )}
          </>

          {/* {UserDetail?.userExist == true && (
            <div
              className="flex items-center gap-2 bg-white rounded-[12px] px-2 py-4 cursor-pointer w-full"
              onClick={() => {
                dispatch(logout());
                // dispatch(
                //   addUserDetails({
                //     userObjId: null,
                //     userId: "",
                //     userType: userTypeMap.NORMAL,
                //   })
                // );

                // setIsSideDrawerOpen(false);
              }}
            >
              <div className="flex justify-center items-center size-[36px]">
                <LogoutIcon className="text-[20px] font-semibold text-[#A5A5A5]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] text-[#3F3F3F] font-semibold">
                  Logout
                </span>
              </div>
            </div>
          )} */}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;

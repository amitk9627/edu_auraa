import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/images/LoginImage.svg"; //".././assets/loginImage.svg";
// import GoogleImage from "../../assets/image/GoogleImage.png";
import OtpInput from "react-otp-input";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
// import { decodeToken, validateEmail } from "@/utils/commonFunction";
// import { showLoader, hideLoader } from "@/lib/features/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { backendUrl } from "../../config";
// import { closeModal } from "@/lib/features/slices/loginModalSlice";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import {
  addUserDetails,
  addUserInfo,
  setUserExist,
} from "../../lib/slices/user";
import { isValidEmail } from "../../utils/helper";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px", // Adjust the radius as needed
  },
};
const maskNumber = (number) => {
  if (!number) return null;
  return (
    number?.slice(0, 2) + "*".repeat(number?.length - 4) + number?.slice(-2)
  );
};
export const Login = ({ onCloseModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [userCred, setUserCred] = useState("");
  const [registerPhoneNo, setRegisterPhoneNo] = useState("");
  const [formType, setFormType] = useState({
    student: true,
    institute: false,
  });
  const dispatch = useDispatch();
  const [isEnterPhoneNumber, setIsEnterPhoneNumber] = useState(false);
  const [contactCode, setContactCode] = useState("");
  // const state = useSelector((store) => store);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // 1 minute countdown (60 seconds)
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [wrongOTP, setWrongOTP] = useState(false);
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [error, setError] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [errEmail, setErrEmail] = useState(false);
  const [errNumber, setErrNumber] = useState(false);
  const [isInstituteLoginForm, setIsInstituteLoginForm] = useState(false);

  // verify Phone number -----------------------------
  const verifyPhoneNumber = () => {
    let data = {};
    if (isNaN(userCred) && isValidEmail(userCred)) {
      data.userCred = userCred;
    } else if (!isNaN(userCred)) {
      data.userCred = Number(userCred);
    } else {
      return;
    }
    axios
      .post(`${backendUrl}/app/v1/users/loginViaEmail`, {
        userCred: data.userCred,
      })
      .then((response) => {
        setUserFound(false);
        if (response.data.userAssociated) {
          setIsEnterPhoneNumber(true);
          // dispatch(hideLoader());
        }
      })
      .catch((error) => {
        setUserFound(true);
        // dispatch(hideLoader());
        if (!error.response.data.userAssociated) {
          setTimeout(() => {
            setIsLoginForm(false);
            setUserFound(false);
          }, 1000);
        }
        // console.log(error.response.data.result);
      });
  };
  // user OTP verify ---------------------------------
  const verifyOTP = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/app/v1/users/verifyOtpViaEmail`,
        {
          userCred: isNaN(userCred) ? userCred : Number(userCred),
          otp: otp,
        }
      );
      console.log(res);

      // "auth": true,

      if (res.data.auth) {
        // dispatch(hideLoader());
        let response = res.data.response;
        console.log(response);
        console.log(response);
        dispatch(setUserExist(true));
        // dispatch(
        //   setTokens({
        //     refreshToken: res.data.refreshToken,
        //     accessToken: res.data.accessToken,
        //   })
        // );
        // localStorage.setItem("refreshToken", res.data.refreshToken);
        // localStorage.setItem("accessToken", res.data.accessToken);
        setWrongOTP(false);
        // {
        //     "_id": "6814062807ff1152d86d083f",
        //     "instituteId": "",
        //     "userID": "USIN1746142760604",
        //     "firstName": "Amit Kumar",
        //     "lastName": "",
        //     "email": "akgzp56@gmail.com",
        //     "contact": "7860519627",
        //     "gender": "UNKNOWN",
        //     "userType": "STUDENT",
        //     "createdAt": "2025-05-01T23:39:20.624Z",
        //     "updatedAt": "2025-05-02T01:20:33.932Z",
        //     "__v": 0
        // }

        const info = {
          firstName: response.firstName,
          lastName: response.LastName,
          userProfile: response.profileImg ?? "",
          number: response.contact,
          email: response.email,
          gender: response.gender ?? "",
          userId: response.userID,
          _id: response._id,
          instituteId: response.instituteId,
        };

        dispatch(addUserInfo({ info: info }));
        onCloseModal();
      }
    } catch (err) {
      setWrongOTP(true);
      // dispatch(hideLoader());
      console.log(err);
    }
  };

  // ---------------------------------- user Register
  const registerUser = async () => {
    let endPoint = `${backendUrl}/app/v1/users/createUser`;
    try {
      const res = await axios.post(endPoint, {
        firstName: name,
        contact: parseInt(registerPhoneNo),
        email: emailId,
        userType: "STUDENT",
      });
      setUserCred(emailId);
      setIsLoginForm(true);
      setUserCred(emailId);
      setIsLoginForm(true);
      console.log("create USER", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const bgLoginImage = {
    backgroundImage: `url(${LoginImage})`,
  };

  return (
    <div className="w-[994px] h-[520px] p-4 flex bg-[#eee] justify-between rounded-[20px] overflow-hidden">
      {/* Login Side Image */}
      <div
        style={bgLoginImage}
        className="w-2/5 h-full flex items-center justify-center rounded-[20px] bg-cover  overflow-hidden"
      >
        <div>
          <div className="px-16 py-10 border border-[#D6D6D6] text-white rounded-xl flex flex-col gap-3">
            <p>
              Signup to join the
              <br />
              club of
            </p>
            <p className="text-xl font-semibold">
              <span>1 Lakh+ </span>
              Happy
              <br /> Customer
            </p>
          </div>
        </div>
      </div>

      {/* Login Right Side */}
      <div className={`w-3/5 flex flex-col gap-5  p-8 relative`}>
        {/* Modal Close Button */}
        <div className="absolute top-5 right-5">
          <button onClick={() => onCloseModal()}>
            <CloseIcon className="text-[18px] text-[#878787]" />
          </button>
        </div>
        <div className="flex flex-col gap-10">
          {/* Login/ Register Button ----- work on every form scale corporate, user, travel agent */}
          <div className="flex justify-center gap-8">
            <>
              <div>
                <button
                  className={`
               ${
                 isLoginForm
                   ? "text-[#7878FF] border-b border-b-[#7878FF]"
                   : "text-[#878787]  border-none"
               } font-semibold text-xl`}
                  onClick={() => setIsLoginForm(true)}
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className={`
               ${
                 isLoginForm
                   ? "text-[#878787] border-none"
                   : "text-[#7878FF] border-b border-b-[#7878FF]"
               } font-semibold text-xl`}
                  onClick={() => setIsLoginForm(false)}
                >
                  Register
                </button>
              </div>
            </>
            {/*  {formType.student ? (
              <>
                <div>
                  <button
                    className={`
               ${
                 isLoginForm
                   ? "text-[#7878FF] border-b border-b-[#7878FF]"
                   : "text-[#878787]  border-none"
               } font-semibold text-xl`}
                    onClick={() => setIsLoginForm(true)}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    className={`
               ${
                 isLoginForm
                   ? "text-[#878787] border-none"
                   : "text-[#7878FF] border-b border-b-[#7878FF]"
               } font-semibold text-xl`}
                    onClick={() => setIsLoginForm(false)}
                  >
                    Register
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    onClick={() => setIsInstituteLoginForm(true)}
                    className={`
                      ${
                        isInstituteLoginForm
                          ? "text-[#7878FF] border-b border-b-[#7878FF]"
                          : "text-[#878787]  border-none"
                      } font-semibold text-xl`}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setIsInstituteLoginForm(false)}
                    className={`${
                      !isInstituteLoginForm
                        ? "text-[#7878FF] border-b border-b-[#7878FF]"
                        : "text-[#878787]  border-none"
                    } font-semibold text-xl`}
                  >
                    Register
                  </button>
                </div>
              </>
            )} */}
          </div>
          {/* <div className="flex justify-center gap-3">
            <button
              onClick={() =>
                setFormType({
                  ...formType,
                  student: true,
                  institute: false,
                })
              }
              className={`${
                formType.student
                  ? "bg-gradient-to-r from-[#7C93E9] to-[#3D5FDD] text-[#fff]"
                  : "bg-white text-[#8F8F8F]"
              } flex items-center justify-center font-semibold  gap-2 rounded-lg px-3 py-2`}
            >
              <span>
                {formType.student ? (
                  <RadioButtonCheckedTwoToneIcon style={{ fontSize: "16px" }} />
                ) : (
                  <RadioButtonUncheckedIcon style={{ fontSize: "16px" }} />
                )}
              </span>

              <span>As Student</span>
            </button>

            <button
              onClick={() =>
                setFormType({
                  ...formType,
                  student: false,
                  institute: true,
                })
              }
              className={`${
                formType.institute
                  ? "bg-gradient-to-r from-[#7C93E9] to-[#3D5FDD] text-[#fff]"
                  : "bg-white text-[#8F8F8F]"
              } flex items-center justify-center gap-2 font-semibold rounded-lg px-3 py-2`}
            >
              {formType.institute ? (
                <RadioButtonCheckedTwoToneIcon style={{ fontSize: "16px" }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ fontSize: "16px" }} />
              )}

              <span>As Institute</span>
            </button>
          </div> */}
        </div>
        {/* Form And Buttons */}
        <div className="flex flex-col gap-5 h-full justify-center">
          <div className="flex flex-col gap-8">
            {isLoginForm ? (
              <>
                {isEnterPhoneNumber ? (
                  <>
                    <div>
                      <div className="flex flex-col space-y-4">
                        <p className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setIsEnterPhoneNumber(!isEnterPhoneNumber)
                            }
                          >
                            <ArrowBackIcon />
                          </button>
                          <label className="text-lg font-medium">
                            Enter the OTP
                          </label>
                        </p>
                        <OtpInput
                          className=""
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span className="mx-4"></span>}
                          renderInput={(props) => (
                            <input
                              {...props}
                              type="number"
                              className=" text-xl text-center  border-b-2  border-b-[#797979]  focus:outline-none focus:border-blue-500"
                              maxLength={1}
                              // placeholder="*"
                              style={{ width: "60px", height: "40px" }}
                            />
                          )}
                        />
                        {wrongOTP && (
                          <p className="text-[12px] text-red-500">Wrong OTP</p>
                        )}
                      </div>

                      <div className="flex flex-col mt-8 justify-center items-center text-[#797979] text-sm">
                        {/* <p>
                          (OTP has been sent to {" "}
                          {maskNumber(userCred) ?? "NA"}
                           and registered email)
                        </p> */}
                        <p>
                          (OTP has been sent to{" "}
                          <b>
                            {isNaN(userCred)
                              ? `${userCred} email`
                              : `registered email associated with +91 ${maskNumber(
                                  userCred
                                )} `}
                          </b>{" "}
                          )
                        </p>
                        <p className="mt-2">
                          <>
                            Didn&apos;t received OTP?{" "}
                            <button
                              onClick={() => verifyPhoneNumber()}
                              className=" hover:underline font-semibold text-[#7878FF]"
                              disabled={timeRemaining != 0}
                            >
                              Resend OTP
                            </button>{" "}
                            {timeRemaining > 0 && (
                              <>
                                in
                                <CountdownTimer
                                  timeRemaining={timeRemaining}
                                  setTimeRemaining={setTimeRemaining}
                                  setIsTimeUp={setIsTimeUp}
                                  isTimeUp={isTimeUp}
                                />
                              </>
                            )}
                          </>
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        disabled={otp.length > 5 ? false : true}
                        className={`w-full ${
                          otp.length > 5
                            ? "bg-blue-600 cursor-pointer"
                            : "bg-gray-200"
                        } py-3 px-2 rounded-lg text-xl text-white font-semibold`}
                        onClick={verifyOTP}
                      >
                        Validate
                      </button>
                    </div>
                    <p className="text-[#5C5C5C]">
                      <span className="text-red-500">*</span> OTP is Valid for
                      <span className="text-[#0195C6]"> 05 Minutes</span>
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="Phonenumber"
                        className="block text-lg mb-2"
                      >
                        Enter Your Email
                      </label>

                      <FormControl fullWidth>
                        <TextField
                          type="email"
                          placeholder="Enter Your Email/Phone Number"
                          sx={inputStyle}
                          value={userCred}
                          onChange={(e) => setUserCred(e.target.value)}
                        />
                      </FormControl>
                      {userFound && (
                        <p className="text-[12px] text-red-500">
                          User Not Found
                        </p>
                      )}
                    </div>
                    <div>
                      {/*  */}
                      <button
                        className={`w-full  ${
                          userCred.length >= 5
                            ? "bg-blue-600 cursor-pointer"
                            : "bg-gray-400"
                        }
                         
                            text-white
                         py-3 px-2 rounded-lg text-xl font-semibold`}
                        onClick={verifyPhoneNumber}
                        disabled={!(userCred.length >= 5)}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col gap-[6px]">
                {/* Name */}
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    label="Student Name"
                    placeholder="Enter Your Name"
                    sx={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                {/* E-mail */}
                <FormControl fullWidth>
                  <TextField
                    type="email"
                    label="Email Id"
                    placeholder="Enter Your Email ID"
                    sx={inputStyle}
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </FormControl>
                {/* Mobile Number */}
                <TextField
                  name="number"
                  required={true}
                  placeholder="Phone Number"
                  // onChange={(e) => setRegisterPhoneNo(e)}
                  onChange={(e) => setRegisterPhoneNo(e.target.value)}
                  inputStyle={{
                    height: "51px",
                    borderRadius: "12px",
                    width: "100%",
                  }}
                  buttonStyle={{ borderRadius: "12px 0 0 12px" }}
                />
                {error && (
                  <p className="text-red-500 text-md">Already Exist User</p>
                )}
                {/* {  !(emailId && registerPhoneNo && name) && <>hello</>} */}
                <div>
                  <button
                    className={`w-full py-3 px-2 rounded-lg text-xl ${
                      emailId && registerPhoneNo && name
                        ? "bg-blue-500 cursor-pointer"
                        : "bg-gray-500"
                    } text-white font-semibold`}
                    disabled={!(emailId && registerPhoneNo && name)}
                    onClick={registerUser}
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Form */}
          {/*  <div className="flex flex-col gap-8">
            {formType.student ? (
              <>
                {isLoginForm ? (
                  <>
                    {isEnterPhoneNumber ? (
                      <>
                        <div>
                          <div className="flex flex-col space-y-4">
                            <p className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  setIsEnterPhoneNumber(!isEnterPhoneNumber)
                                }
                              >
                                <ArrowBackIcon />
                              </button>
                              <label className="text-lg font-medium">
                                Enter the OTP
                              </label>
                            </p>
                            <OtpInput
                              className=""
                              value={otp}
                              onChange={setOtp}
                              numInputs={6}
                              renderSeparator={<span className="mx-4"></span>}
                              renderInput={(props) => (
                                <input
                                  {...props}
                                  type="number"
                                  className=" text-xl text-center  border-b-2  border-b-[#797979]  focus:outline-none focus:border-blue-500"
                                  maxLength={1}
                                  // placeholder="*"
                                  style={{ width: "60px", height: "40px" }}
                                />
                              )}
                            />
                            {wrongOTP && (
                              <p className="text-[12px] text-red-500">
                                Wrong OTP
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col mt-8 justify-center items-center text-[#797979] text-sm">
                            <p>
                              (OTP has been sent to +91{" "}
                              {maskNumber(userCred) ?? "NA"} and registered
                              {maskNumber(userCred) ?? "NA"} and registered
                              email)
                            </p>
                            <p className="mt-2">
                              <>
                                Didn&apos;t received OTP?{" "}
                                <button
                                  // onClick={() => resendOTP()}
                                  className=" hover:underline font-semibold text-[#7878FF]"
                                  disabled={timeRemaining != 0}
                                >
                                  Resend OTP
                                </button>{" "}
                                {timeRemaining > 0 && (
                                  <>
                                    in
                                    <CountdownTimer
                                      timeRemaining={timeRemaining}
                                      setTimeRemaining={setTimeRemaining}
                                      setIsTimeUp={setIsTimeUp}
                                      isTimeUp={isTimeUp}
                                    />
                                  </>
                                )}
                              </>
                            </p>
                          </div>
                        </div>

                        <div>
                          <button
                            disabled={otp.length > 5 ? false : true}
                            className={`w-full ${
                              otp.length > 5
                                ? "bg-blue-600 cursor-pointer"
                                : "bg-gray-200"
                            } py-3 px-2 rounded-lg text-xl text-white font-semibold`}
                            // onClick={verifyOTP}
                          >
                            Validate
                          </button>
                        </div>
                        <p className="text-[#5C5C5C]">
                          <span className="text-red-500">*</span> OTP is Valid
                          for
                          <span className="text-[#0195C6]"> 05 Minutes</span>
                        </p>
                      </>
                    ) : (
                      <>
                        <div>
                          <label
                            htmlFor="Phonenumber"
                            className="block text-lg mb-2"
                          >
                            Email/Phone Number
                          </label>

                          <FormControl fullWidth>
                            <TextField
                              type="text"
                              placeholder="Enter Your Number"
                              sx={inputStyle}
                              value={userCred}
                              onChange={(e) => setUserCred(e.target.value)}
                              value={userCred}
                              onChange={(e) => setUserCred(e.target.value)}
                            />
                          </FormControl>
                          {userFound && (
                            <p className="text-[12px] text-red-500">
                              User Not Found
                            </p>
                          )}
                        </div>
                        <div>
                          <button
                            className={`w-full  ${
                              userCred.length >= 5 && userCred.length <= 15
                              userCred.length >= 5 && userCred.length <= 15
                                ? "bg-blue-600"
                                : "bg-gray-400"
                            }
                         
                            text-white
                         py-3 px-2 rounded-lg text-xl font-semibold`}
                            // onClick={verifyPhoneNumber}
                            disabled={
                              !(userCred.length >= 5 && userCred.length <= 15)
                              !(userCred.length >= 5 && userCred.length <= 15)
                            }
                          >
                            Continue
                          </button>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col gap-[6px]">
                    
                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        label="Student Name"
                        placeholder="Enter Your Name"
                        sx={inputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField
                        type="email"
                        label="Email Id"
                        placeholder="Enter Your Email ID"
                        sx={inputStyle}
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                      />
                    </FormControl>
                    <TextField
                      name="number"
                      required={true}
                      countryCodeEditable={false}
                      country={"in"}
                      placeholder="Phone Number"
                      // onChange={(e) => setRegisterPhoneNo(e)}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        height: "51px",
                        borderRadius: "12px",
                        width: "100%",
                      }}
                      buttonStyle={{ borderRadius: "12px 0 0 12px" }}
                      containerClass="phone-input-custom"
                    />
                    {error && (
                      <p className="text-red-500 text-md">Already Exist User</p>
                    )}
                    <div>
                      <button
                        className={`w-full py-3 px-2 rounded-lg text-xl ${
                          (contactCode.includes("91") &&
                            registerPhoneNo.length == 10 &&
                            name.length > 0 &&
                            validateEmail(emailId)) ||
                          (!contactCode.includes("91") &&
                            registerPhoneNo.length > 6 &&
                            registerPhoneNo.length <= 15 &&
                            name.length > 0 &&
                            validateEmail(emailId))
                            ? "bg-blue-600"
                            : "bg-gray-400"
                        } text-white font-semibold`}
                        disabled={
                          contactCode.includes("91")
                            ? !(
                                registerPhoneNo.length == 10 &&
                                name.length > 0 &&
                                validateEmail(emailId)
                              )
                            : !(
                                registerPhoneNo.length > 6 &&
                                registerPhoneNo.length <= 15 &&
                                name.length > 0 &&
                                validateEmail(emailId)
                              )
                        }
                        onClick={registerUser}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : formType.institute ? (
              <InstituteLogin
                isInstituteLoginForm={isInstituteLoginForm}
                setIsInstituteLoginForm={setIsInstituteLoginForm}
              />
            ):<></>} 
          </div>*/}
        </div>
        {/* <div className="text-md text=[#222222] font-medium absolute bottom-2">
          By proceeding, you are agree to WTi’s{" "}
          <Link
            href="/privacy-policy"
            className="text-[#0077B6] hover:underline"
            // onClick={() => onCloseModal()}
          >
            Privacy Policy
          </Link>
          ,{" "}
          <Link href={""} className="text-[#0077B6]  hover:underline">
            User Agreement{" "}
          </Link>
          and{" "}
          <Link
            href="/terms-of-use"
            className="text-[#0077B6]  hover:underline"
            // onClick={() => onCloseModal()}
          >
            T&Cs
          </Link>
        </div> */}
      </div>
    </div>
  );
};

// const InstituteLogin = ({ isInstituteLoginForm, setIsInstituteLoginForm }) => {
//   const navigate = useNavigate();
//   const [userCred, setUserCred] = useState("");
//   const [registerPhoneNo, setRegisterPhoneNo] = useState("");
//   const [formType, setFormType] = useState({
//     student: true,
//     institute: false,
//   });
//   // const dispatch = useDispatch();
//   const [isEnterPhoneNumber, setIsEnterPhoneNumber] = useState(false);
//   const [contactCode, setContactCode] = useState("");
//   // const state = useSelector((store) => store);
//   const [otp, setOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(30); // 1 minute countdown (60 seconds)
//   const [isTimeUp, setIsTimeUp] = useState(false);
//   const [userFound, setUserFound] = useState(false);
//   const [wrongOTP, setWrongOTP] = useState(false);
//   const [name, setName] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [gender, setGender] = useState("MALE");
//   const [error, setError] = useState(false);
//   const [timeRemaining, setTimeRemaining] = useState(30);
//   const [errEmail, setErrEmail] = useState(false);
//   const [errNumber, setErrNumber] = useState(false);

//   const handlePhoneChange = (value, country) => {
//     // country code
//     setContactCode(country.dialCode);
//     // phone nunber of user
//     const numberOnly = value.startsWith(`${country.dialCode}`)
//       ? value.slice(country.dialCode.length).trim()
//       : value;
//     setRegisterPhoneNo(numberOnly);
//   };

// verify Phone number -----------------------------
const verifyPhoneNumber = () => {
  let data = JSON.stringify({
    contact: Number(phoneNo),
  });
  // if (phoneNo.length > 0) {
  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: `${baseUrl}/global/app/v1/user/loginViaSms`,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Basic aGFyc2g6MTIz",
  //     },
  //     data: data,
  //   };
  //   dispatch(showLoader());
  //   axiosInstance
  //     .post(`/global/app/v1/user/loginViaSms`, {
  //       contact: Number(phoneNo),
  //     })
  //     .then((response) => {
  //       setUserFound(false);
  //       if (response.data.userAssociated) {
  //         setIsEnterPhoneNumber(true);
  //         dispatch(hideLoader());
  //       }
  //     })
  //     .catch((error) => {
  //       setUserFound(true);
  //       dispatch(hideLoader());
  //       if (!error.response.data.userAssociated) {
  //         setTimeout(() => {
  //           setIsLoginForm(false);
  //           setUserFound(false);
  //         }, 1000);
  //       }
  //       // console.log(error.response.data.result);
  //     });
  // }
};
// user OTP verify ---------------------------------
const verifyOTP = async () => {
  let data = JSON.stringify({
    contact: Number(phoneNo),
    otp: otp,
  });
  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: `${baseUrl}/global/app/v1/user/verifyOtpViaSms`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Basic aGFyc2g6MTIz",
  //   },
  //   data: data,
  // };
  // dispatch(showLoader());
  // try {
  //   const res = await axiosInstance.post(
  //     "/global/app/v1/user/verifyOtpViaSms",
  //     {
  //       contact: Number(phoneNo),
  //       otp: otp,
  //     }
  //   );

  //   if (res.data.auth) {
  //     dispatch(hideLoader());
  //     dispatch(setUserExist(true));
  //     dispatch(
  //       setTokens({
  //         refreshToken: res.data.refreshToken,
  //         accessToken: res.data.accessToken,
  //       })
  //     );
  //     localStorage.setItem("refreshToken", res.data.refreshToken);
  //     localStorage.setItem("accessToken", res.data.accessToken);
  //     setWrongOTP(false);
  //     const user = await decodeToken(res.data?.accessToken);
  //     setCookie(null, "authToken", res.data?.accessToken, {
  //       path: "/", // Allows cookie access for all paths
  //       maxAge: user.exp,
  //     });

  //     const info = {
  //       userName: user.username,
  //       userProfile: user.profileImg ?? "",
  //       number: user.contact,
  //       email: user.emailID,
  //       gender: user.gender ?? "",
  //     };

  //     const userDetails = {
  //       userId: user.userID,
  //       userObjId: user.user_obj_id,
  //       userType: user.role,
  //     };
  //     dispatch(addUserDetails({ userDetails: userDetails }));
  //     dispatch(addUserInfo({ info: info }));
  //     onCloseModal();
  //   }
  // } catch (err) {
  //   setWrongOTP(true);
  //   dispatch(hideLoader());
  //   console.log(err);
  // }
};
// ------------------------------ Resend OTP function
const resendOTP = () => {
  setTimeRemaining(30);
  let data = JSON.stringify({
    contact: Number(phoneNo),
  });

  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: `${baseUrl}/global/app/v1/user/resendOtpViaSms`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Basic aGFyc2g6MTIz",
  //   },
  //   data: data,
  // };
  // dispatch(showLoader());
  // axiosInstance
  //   .post("/global/app/v1/user/resendOtpViaSms", {
  //     contact: Number(phoneNo),
  //   })
  //   .then((response) => {
  //     // console.log(response.data);
  //     setWrongOTP(false);
  //     dispatch(hideLoader());
  //     setIsTimeUp(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     dispatch(hideLoader());
  //   });
};

//   // ---------------------------------- user Register
//   const registerUser = async () => {
//     console.log("this is nothing");
//     // let endPoint = "/global/app/v1/user/createUser";
//     // let body = {
//     //   firstName: name,
//     //   lastName: "",
//     //   contact: parseInt(registerPhoneNo),
//     //   countryName: "India",
//     //   contactCode: contactCode,
//     //   address: "",
//     //   city: "",
//     //   gender: gender.toUpperCase(),
//     //   postalCode: "",
//     //   emailID: emailId,
//     //   password: "",
//     //   otp: {
//     //     code: "",
//     //     otpExpiry: "",
//     //   },
//     // };
//     // dispatch(showLoader());
//     // try {
//     //   const res = await axiosInstance.post(endPoint, {
//     //     firstName: name,
//     //     lastName: "",
//     //     contact: parseInt(registerPhoneNo),
//     //     contactCode: contactCode,
//     //     countryName: "India",
//     //     address: "",
//     //     city: "",
//     //     gender: gender.toUpperCase(),
//     //     postalCode: "",
//     //     emailID: emailId,
//     //     password: "",
//     //     otp: {
//     //       code: "",
//     //       otpExpiry: "",
//     //     },
//     //   });
//     //   // console.log("create USER", res.data);
//     //   dispatch(toggleToast());

//     //   if (res.data.userExist) {
//     //     dispatch(toggleToast("User Exist Already"));
//     //     setError(true);
//     //     setEmailId("");
//     //     setGender("MALE");
//     //     setUserCred(registerPhoneNo);
//     //     setName("");
//     //   } else {
//     //     dispatch(toggleToast("User Created Successfully"));
//     //     setError(false);
//     //     setIsLoginForm(true);
//     //     setEmailId("");
//     //     setGender("MALE");
//     //     setName("");
//     //   }
//     //   dispatch(hideLoader());
//     // } catch (err) {
//     //   dispatch(hideLoader());
//     //   dispatch(toggleToast(err.response.data.result));
//     //   console.log(err.response.data);
//     // }
//   };

//   return (
//     <div>
//       <>
//         {isInstituteLoginForm ? (
//           <>
//             {isEnterPhoneNumber ? (
//               <>
//                 <div>
//                   <div className="flex flex-col space-y-4">
//                     <p className="flex items-center gap-2">
//                       <button
//                         onClick={() =>
//                           setIsEnterPhoneNumber(!isEnterPhoneNumber)
//                         }
//                       >
//                         <ArrowBackIcon />
//                       </button>
//                       <label className="text-lg font-medium">
//                         Enter the OTP
//                       </label>
//                     </p>
//                     <OtpInput
//                       className=""
//                       value={otp}
//                       onChange={setOtp}
//                       numInputs={6}
//                       renderSeparator={<span className="mx-4"></span>}
//                       renderInput={(props) => (
//                         <input
//                           {...props}
//                           type="number"
//                           className=" text-xl text-center  border-b-2  border-b-[#797979]  focus:outline-none focus:border-blue-500"
//                           maxLength={1}
//                           // placeholder="*"
//                           style={{ width: "60px", height: "40px" }}
//                         />
//                       )}
//                     />
//                     {wrongOTP && (
//                       <p className="text-[12px] text-red-500">Wrong OTP</p>
//                     )}
//                   </div>

//                   <div className="flex flex-col mt-8 justify-center items-center text-[#797979] text-sm">
//                     <p>
//                       (OTP has been sent to  {maskNumber(userCred) ?? "NA"}{" "}
//                       and registered email)
//                     </p>
//                     <p className="mt-2">
//                       <>
//                         Didn&apos;t received OTP?{" "}
//                         <button
//                           // onClick={() => resendOTP()}
//                           className=" hover:underline font-semibold text-[#7878FF]"
//                           disabled={timeRemaining != 0}
//                         >
//                           Resend OTP
//                         </button>{" "}
//                         {timeRemaining > 0 && (
//                           <>
//                             in
//                             <CountdownTimer
//                               timeRemaining={timeRemaining}
//                               setTimeRemaining={setTimeRemaining}
//                               setIsTimeUp={setIsTimeUp}
//                               isTimeUp={isTimeUp}
//                             />
//                           </>
//                         )}
//                       </>
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <button
//                     disabled={otp.length > 5 ? false : true}
//                     className={`w-full ${
//                       otp.length > 5
//                         ? "bg-blue-600 cursor-pointer"
//                         : "bg-gray-200"
//                     } py-3 px-2 rounded-lg text-xl text-white font-semibold`}
//                     // onClick={verifyOTP}
//                   >
//                     Validate
//                   </button>
//                 </div>
//                 <p className="text-[#5C5C5C]">
//                   <span className="text-red-500">*</span> OTP is Valid for
//                   <span className="text-[#0195C6]"> 05 Minutes</span>
//                 </p>
//               </>
//             ) : (
//               <div className="flex flex-col gap-8">
//                 <div>
//                   <label htmlFor="Phonenumber" className="block text-lg mb-2">
//                     Email/Phone Number
//                   </label>

//                   <FormControl fullWidth>
//                     <TextField
//                       type="text"
//                       placeholder="Enter Your Email/Number"
//                       sx={inputStyle}
//                       value={userCred}
//                       onChange={(e) => setUserCred(e.target.value)}
//                     />
//                   </FormControl>
//                   {userFound && (
//                     <p className="text-[12px] text-red-500">User Not Found</p>
//                   )}
//                 </div>
//                 <div>
//                   {/*  */}
//                   <button
//                     className={`w-full cursor-pointer  ${
//                       userCred.length >= 5 && userCred.length <= 15
//                         ? "bg-blue-600"
//                         : "bg-gray-400"
//                     }

//                             text-white
//                          py-3 px-2 rounded-lg text-xl font-semibold`}
//                     // onClick={verifyPhoneNumber}
//                     disabled={!(userCred.length >= 5 && userCred.length <= 15)}
//                     onClick={() => navigate("/profile")}
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <div className="flex flex-col gap-[6px]">
//             {/* Name */}
//             <FormControl fullWidth>
//               <TextField
//                 type="text"
//                 label="Institute Name"
//                 placeholder="Enter Your Name"
//                 sx={inputStyle}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormControl>
//             {/* E-mail */}
//             <FormControl fullWidth>
//               <TextField
//                 type="email"
//                 label="Email Id"
//                 placeholder="Enter Your Email ID"
//                 sx={inputStyle}
//                 value={emailId}
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </FormControl>

//             {/* Mobile Number */}
//             <TextField
//               name="number"
//               required={true}
//               placeholder="Phone Number"
//               // onChange={(e) => setRegisterPhoneNo(e)}
//               onChange={handlePhoneChange}
//               inputStyle={{
//                 height: "51px",
//                 borderRadius: "12px",
//                 width: "100%",
//               }}
//               buttonStyle={{ borderRadius: "12px 0 0 12px" }}
//               containerClass="phone-input-custom"
//             />
//             {error && (
//               <p className="text-red-500 text-md">Already Exist User</p>
//             )}
//             <div className="flex items-center gap-2">
//               <FormControl fullWidth>
//                 <TextField
//                   type="text"
//                   label="City"
//                   placeholder="Enter Your City"
//                   sx={inputStyle}
//                   //   value={emailId}
//                   //   onChange={(e) => setEmailId(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl fullWidth>
//                 <TextField
//                   type="type"
//                   label="Address"
//                   placeholder="Enter Your Address"
//                   sx={inputStyle}
//                   //
//                   //   value={emailId}
//                   //   onChange={(e) => setEmailId(e.target.value)}
//                 />
//               </FormControl>
//             </div>
//             <div>
//               <button
//                 className={`w-full py-3 px-2 rounded-lg text-xl ${
//                   (contactCode.includes("91") &&
//                     registerPhoneNo.length == 10 &&
//                     name.length > 0 &&
//                     validateEmail(emailId)) ||
//                   (!contactCode.includes("91") &&
//                     registerPhoneNo.length > 6 &&
//                     registerPhoneNo.length <= 15 &&
//                     name.length > 0 &&
//                     validateEmail(emailId))
//                     ? "bg-blue-600"
//                     : "bg-gray-400"
//                 } text-white font-semibold`}
//                 disabled={
//                   contactCode.includes("91")
//                     ? !(
//                         registerPhoneNo.length == 10 &&
//                         name.length > 0 &&
//                         validateEmail(emailId)
//                       )
//                     : !(
//                         registerPhoneNo.length > 6 &&
//                         registerPhoneNo.length <= 15 &&
//                         name.length > 0 &&
//                         validateEmail(emailId)
//                       )
//                 }
//                 onClick={registerUser}
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     </div>
//   );
// };

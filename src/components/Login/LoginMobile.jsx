import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch } from "react-redux";
import CountdownTimer from "./CountdownTimer";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const maskNumber = (number) => {
  if (!number) return null;
  return (
    number?.slice(0, 2) + "*".repeat(number?.length - 4) + number?.slice(-2)
  );
};
const validateEmail = () => {};

const LoginMobile = ({ onCloseModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [phoneNo, setPhoneNo] = useState("");
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
  const [gender, setGender] = useState("MALE");
  const [error, setError] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [errEmail, setErrEmail] = useState(false);
  const [errNumber, setErrNumber] = useState(false);

  const handlePhoneChange = (value, country) => {
    // country code
    setContactCode(country.dialCode);
    // phone nunber of user
    const numberOnly = value.startsWith(`${country.dialCode}`)
      ? value.slice(country.dialCode.length).trim()
      : value;
    setRegisterPhoneNo(numberOnly);
  };

  // verify Phone number -----------------------------
  const verifyPhoneNumber = () => {
    let data = JSON.stringify({
      contact: Number(phoneNo),
    });
    // if (phoneNo.length > 0) {
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
    //     });
    // }
  };
  // user OTP verify ---------------------------------
  // const verifyOTP = async () => {
  //   let data = JSON.stringify({
  //     contact: Number(phoneNo),
  //     otp: otp,
  //   });

  //   dispatch(showLoader());
  //   // try {
  //   //   const res = await axiosInstance.post(
  //   //     "/global/app/v1/user/verifyOtpViaSms",
  //   //     {
  //   //       contact: Number(phoneNo),
  //   //       otp: otp,
  //   //     }
  //   //   );

  //   //   if (res.data.auth) {
  //   //     dispatch(hideLoader());
  //   //     dispatch(setUserExist(true));
  //   //     dispatch(
  //   //       setTokens({
  //   //         refreshToken: res.data.refreshToken,
  //   //         accessToken: res.data.accessToken,
  //   //       })
  //   //     );
  //   //     setWrongOTP(false);
  //   //     const user = await decodeToken(res.data?.accessToken);
  //   //     setCookie(null, "authToken", res.data?.accessToken, {
  //   //       path: "/", // Allows cookie access for all paths
  //   //       maxAge: user.exp,
  //   //     });

  //   //     const info = {
  //   //       userName: user.username,
  //   //       userProfile: user.profileImg ?? "",
  //   //       number: user.contact,
  //   //       email: user.emailID,
  //   //       gender: user.gender ?? "",
  //   //     };

  //   //     const userDetails = {
  //   //       userId: user.userID,
  //   //       userObjId: user.user_obj_id,
  //   //       userType: user.role,
  //   //     };
  //   //     dispatch(addUserDetails({ userDetails: userDetails }));
  //   //     dispatch(addUserInfo({ info: info }));
  //   //     onCloseModal();
  //   //   }
  //   // } catch (err) {
  //   //   setWrongOTP(true);
  //   //   dispatch(hideLoader());
  //   //   console.log(err);
  //   // }
  // };
  // ------------------------------ Resend OTP function
  // const resendOTP = () => {
  //   setTimeRemaining(30);
  //   let data = JSON.stringify({
  //     contact: Number(phoneNo),
  //   });

  //   dispatch(showLoader());
  //   axiosInstance
  //     .post("/global/app/v1/user/resendOtpViaSms", {
  //       contact: Number(phoneNo),
  //     })
  //     .then((response) => {
  //       setWrongOTP(false);
  //       dispatch(hideLoader());
  //       setIsTimeUp(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       dispatch(hideLoader());
  //     });
  // };

  // ---------------------------------- user Register
  // const registerUser = async () => {
  //   let endPoint = "/global/app/v1/user/createUser";
  //   let body = {
  //     firstName: name,
  //     lastName: "",
  //     contact: parseInt(registerPhoneNo),
  //     countryName: "India",
  //     contactCode: contactCode,
  //     address: "",
  //     city: "",
  //     gender: gender.toUpperCase(),
  //     postalCode: "",
  //     emailID: emailId,
  //     password: "",
  //     otp: {
  //       code: "",
  //       otpExpiry: "",
  //     },
  //   };
  //   dispatch(showLoader());
  //   try {
  //     const res = await axiosInstance.post(endPoint, {
  //       firstName: name,
  //       lastName: "",
  //       contact: parseInt(registerPhoneNo),
  //       contactCode: contactCode,
  //       countryName: "India",
  //       address: "",
  //       city: "",
  //       gender: gender.toUpperCase(),
  //       postalCode: "",
  //       emailID: emailId,
  //       password: "",
  //       otp: {
  //         code: "",
  //         otpExpiry: "",
  //       },
  //     });
  //     dispatch(toggleToast());

  //     if (res.data.userExist) {
  //       dispatch(toggleToast("User Exist Already"));
  //       setError(true);
  //       setEmailId("");
  //       setGender("MALE");
  //       setPhoneNo(registerPhoneNo);
  //       setName("");
  //     } else {
  //       dispatch(toggleToast("User Created Successfully"));
  //       setError(false);
  //       setIsLoginForm(true);
  //       setEmailId("");
  //       setGender("MALE");
  //       setName("");
  //     }
  //     dispatch(hideLoader());
  //   } catch (err) {
  //     dispatch(hideLoader());
  //     dispatch(toggleToast(err.response.data.result));
  //     console.log(err.response.data);
  //   }
  // };

  // --------------- TA State
  const [userCred, setUserCred] = useState("");
  const [isInputUserCred, setIsInputUserCred] = useState(false);
  const [agentOtp, setAgentOtp] = useState("");
  // const [timeLeft, setTimeLeft] = useState(30); // 1 minute countdown (60 seconds)
  // const [isTimeUp, setIsTimeUp] = useState(false);
  const [wrongTaOTP, setWrongTaOTP] = useState(false);
  const [taUserFound, setTaUserFound] = useState(false);
  const [taError, setTAError] = useState(false);
  // const [timeRemaining, setTimeRemaining] = useState(30);
  // const onCloseModal = () => {
  //   // dispatch(closeModal());
  // };
  // const verifyTAPhoneNumber = () => {
  //   setTimeRemaining(30);
  //   dispatch(showLoader());
  //   axiosInstance
  //     .post(`/global/app/v1/b2b/loginB2bUser`, {
  //       userCred: userCred,
  //     })
  //     .then((response) => {
  //       // console.log(response.data);
  //       if (response.data.userAssociated) {
  //         setIsTimeUp(false);
  //         setIsInputUserCred(true);
  //         dispatch(hideLoader());
  //       } else {
  //         setTaUserFound(true);
  //       }
  //     })
  //     .catch((error) => {
  //       setTaUserFound(true);
  //       dispatch(hideLoader());
  //       if (!error.response.data.userAssociated) {
  //         setTimeout(() => {
  //           setTaUserFound(false);
  //         }, 3000);
  //       }
  //       console.log(error.response.data);
  //     });
  // };
  // user OTP verify ---------------------------------
  // const verifyTAOTP = async () => {
  //   dispatch(showLoader());
  //   try {
  //     const res = await axiosInstance.post(
  //       "/global/app/v1/b2b/verifyOtpB2bUser",
  //       {
  //         userCred: userCred,
  //         loginType: "otp",
  //         otp: agentOtp,
  //       }
  //     );

  //     if (res.data.auth) {
  //       dispatch(hideLoader());
  //       dispatch(setUserExist(true));
  //       dispatch(
  //         setTokens({
  //           refreshToken: res.data.refreshToken,
  //           accessToken: res.data.accessToken,
  //         })
  //       );
  //       localStorage.setItem("refreshToken", res.data.refreshToken);
  //       localStorage.setItem("accessToken", res.data.accessToken);
  //       setWrongTaOTP(false);
  //       const user = await decodeToken(res.data?.accessToken);
  //       // console.log(user);
  //       setCookie(null, "authToken", res.data?.accessToken, {
  //         path: "/", // Allows cookie access for all paths
  //         maxAge: user.exp,
  //       });

  //       const info = {
  //         userName: user.username,
  //         userProfile: user.profileImg ?? "",
  //         number: user.contact,
  //         email: user.emailID,
  //         gender: user.gender ?? "",
  //       };

  //       const userDetails = {
  //         userId: user.userID,
  //         userObjId: user.user_obj_id,
  //         userType: user.role,
  //       };
  //       dispatch(addUserDetails({ userDetails: userDetails }));
  //       dispatch(addUserInfo({ info: info }));
  //       onCloseModal();
  //     }
  //   } catch (err) {
  //     setWrongTaOTP(true);
  //     setTimeout(() => {
  //       setWrongTaOTP(false);
  //     }, 3000);
  //     dispatch(hideLoader());
  //     console.log(err.response.data);
  //   }
  // };

  return (
    <div className="bg-white  py-6 px-2 flex flex-col gap-3 rounded-md w-[95%]">
      <div className="flex gap-3 items-center justify-center border-b border-[#e5e5e5] pb-6 w-[95%] mx-auto">
        <button
          //   onClick={() =>
          //     setFormType({
          //       ...formType,
          //       student: true,
          //       corporateForm: false,
          //       institute: false,
          //     })
          //   }
          className={`${
            formType.student ? " text-[#3D5FDD] " : " text-[#8F8F8F]"
          } flex items-center justify-center font-semibold  gap-1 rounded-lg px-2 py-1`}
        >
          <span>
            {formType.student ? (
              <RadioButtonCheckedTwoToneIcon style={{ fontSize: "18px" }} />
            ) : (
              <RadioButtonUncheckedIcon style={{ fontSize: "18px" }} />
            )}
          </span>

          <span className="text-[18px]">As Student</span>
        </button>
        <button
          //   onClick={() =>
          //     setFormType({
          //       ...formType,
          //       student: false,
          //       corporateForm: false,
          //       institute: true,
          //     })
          //   }
          className={`${
            formType.institute ? "text-[#3D5FDD]" : " text-[#8F8F8F]"
          } flex items-center justify-center gap-1 font-semibold rounded-lg px-[6px] py-1`}
        >
          {formType.institute ? (
            <RadioButtonCheckedTwoToneIcon style={{ fontSize: "18px" }} />
          ) : (
            <RadioButtonUncheckedIcon style={{ fontSize: "18px" }} />
          )}

          <span className="text-[18px]">As Institute</span>
        </button>
      </div>
      {formType.student && (
        <div>
          {isLoginForm ? (
            <>
              {/* LOGIN SCREEN OR REGISTER */}
              {!isEnterPhoneNumber ? (
                <>
                  {/* LOGIN SCREEN shadow shadow-[0px_2px_20px_0px_#0000001F] */}
                  <div className="bg-white rounded-[12px] px-3 py-6 ">
                    <div className="mb-8">
                      <h2 className="text-[#222222] text-[24px] font-bold">
                        Login{" "}
                        <span className="w-[60px] h-[3px] inline-block rounded-[4px] bg-[#7878FF]"></span>
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="text-[#222222] text-[16px] font-medium ">
                        Email/Phone Number
                      </label>

                      <div className="flex items-center border border-[#E7E7E7] rounded-[12px] py-4">
                        <input
                          type="text"
                          placeholder="your contact number"
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                          className="w-full outline-none placeholder:text-[#B3B3B3] placeholder:text-[16px] focus:outline-none text-[16px] text-[#3F3F3F] font-semibold"
                        />
                      </div>

                      <button
                        className={`w-full  ${
                          phoneNo.length > 5 && phoneNo.length <= 15
                            ? "primary_gradient_color"
                            : "bg-gray-400"
                        } text-[#fff] font-semibold rounded-[12px] py-4`}
                        // onClick={verifyPhoneNumber}
                        disabled={!(phoneNo.length > 5 && phoneNo.length <= 15)}
                      >
                        Continue
                      </button>

                      <div className="flex flex-col gap-6">
                        <span className="text-[14px] text-[#000] font-medium">
                          Don’t have an account?{" "}
                          <button
                            className="text-[#7878FF] bg-transparent"
                            // onClick={() => setIsLoginForm(false)}
                          >
                            Register
                          </button>
                        </span>

                        {/* <span className="text-[14px]">
                          By proceeding, you are agree to WTI’s{" "}
                          <span className="text-[#0077B6] font-semibold">
                            Privacy Policy, User Agreement
                          </span>
                          and{" "}
                          <span className="text-[14px] text-[#0077B6] font-semibold">
                            T&Cs
                          </span>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* OTP SCREEN */}
                  <div className="bg-white rounded-[12px] px-3 py-6">
                    <div className="mb-8">
                      <h2 className="text-[#222222] text-[24px] font-bold">
                        Enter OTP{" "}
                        <span className="w-[60px] h-[3px] inline-block rounded-[4px] bg-[#7878FF]"></span>
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="text-[#222222] text-[16px] font-medium ">
                        Login With Phone Number
                      </label>

                      <div className="flex flex-col items-center w-full justify-center  rounded-[12px] py-4">
                        <OTPInput
                          className=""
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          renderSeparator={<span className="mx-4"></span>}
                          renderInput={(props) => (
                            <input
                              {...props}
                              type="number"
                              className="text-xl text-center  border-b-2  border-b-[#797979]  focus:outline-none focus:border-blue-500"
                              maxLength={1}
                              // placeholder="*"
                              style={{ width: "20px", height: "40px" }}
                            />
                          )}
                        />
                        {wrongOTP && (
                          <p className="text-[12px] text-red-500">Wrong OTP</p>
                        )}

                        <div className="w-full">
                          <div className="flex flex-col mt-8 justify-start text-[#797979] text-sm">
                            <p className="text-start">
                              (OTP has been sent to +91{" "}
                              {maskNumber(phoneNo) ?? "NA"})
                            </p>
                            <p className="mt-0">
                              <>
                                Didn&apos;t received OTP?{" "}
                                <button
                                  //   onClick={() => resendOTP()}
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
                      </div>

                      {/* <button className="primary_gradient_color text-[#fff] font-semibold rounded-[12px] py-4">
                    Validate
                  </button> */}

                      <button
                        disabled={otp.length > 5 ? false : true}
                        className={`w-full ${
                          otp.length > 5
                            ? "primary_gradient_color cursor-pointer"
                            : "bg-gray-200"
                        } text-[#fff] font-semibold rounded-[12px] py-4`}
                        // onClick={verifyOTP}
                      >
                        Validate
                      </button>
                      <div className="flex flex-col gap-6">
                        <span className="text-[14px] text-[#000] font-medium">
                          Don’t have an account?{" "}
                          <button
                            className="text-[#7878FF] bg-transparent"
                            // onClick={() => setIsLoginForm(false)}
                          >
                            Register
                          </button>
                        </span>

                        <span className="text-[14px]">
                          By proceeding, you are agree to WTI’s{" "}
                          <span className="text-[#0077B6] font-semibold">
                            Privacy Policy, User Agreement
                          </span>
                          and{" "}
                          <span className="text-[14px] text-[#0077B6] font-semibold">
                            T&Cs
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* REGISTER */}
              <div className="bg-white rounded-[12px] px-5 py-6 ">
                <div className="mb-8">
                  <h2 className="text-[#222222] text-[24px] font-bold">
                    Register{" "}
                    <span className="w-[60px] h-[3px] inline-block rounded-[4px] bg-[#7878FF]"></span>
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="focus:outline-none focus:border-[#5b69fd] outline-none text-[16px] text-[#3F3F3F] border-b border-[#E4E4E4] pb-2 w-full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Enter your Email ID"
                      className="focus:outline-none focus:border-[#5b69fd] outline-none text-[16px] text-[#3F3F3F] border-b border-[#E4E4E4] pb-2 w-full"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>

                  <PhoneInput
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

                  <FormControl fullWidth>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={gender || ""}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <FormControlLabel
                        value="MALE"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 16,
                              },
                            }}
                          />
                        }
                        label="Male"
                        className="text-[#333] text-md"
                      />
                      <FormControlLabel
                        value="FEMALE"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 16,
                              },
                            }}
                          />
                        }
                        label="Female"
                        className="text-[#333] text-md"
                      />

                      <FormControlLabel
                        value="OTHERS"
                        control={
                          <Radio
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 16,
                              },
                            }}
                          />
                        }
                        label="Others"
                        className="text-[#333] text-md"
                      />
                    </RadioGroup>
                  </FormControl>

                  {/* <button
                className="primary_gradient_color text-[#fff] font-semibold rounded-[12px] py-4"
             
              >
                Register
              </button> */}

                  {error && (
                    <p className="text-red-500 text-md">Already Exist User</p>
                  )}

                  <button
                    className={`w-full py-3 px-2 rounded-lg text-[16px] ${
                      (contactCode.includes("91") &&
                        registerPhoneNo.length == 10 &&
                        name.length > 0 &&
                        validateEmail(emailId)) ||
                      (!contactCode.includes("91") &&
                        registerPhoneNo.length > 6 &&
                        registerPhoneNo.length <= 15 &&
                        name.length > 0 &&
                        validateEmail(emailId))
                        ? "primary_gradient_color"
                        : "bg-gray-400"
                    } text-[#fff] font-semibold rounded-[12px] py-4`}
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
                    // onClick={registerUser}
                  >
                    Register
                  </button>
                  <div className="flex flex-col gap-6">
                    <span className="text-[14px] text-[#000] font-medium">
                      Already have an account?{" "}
                      <button
                        className="text-[#7878FF] bg-transparent"
                        // onClick={() => setIsLoginForm(true)}
                      >
                        Login
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {formType.institute && (
        <div className="mb-2">
          <>
            {/* LOGIN SCREEN OR REGISTER */}
            {!isInputUserCred ? (
              <>
                {/* LOGIN SCREEN  */}
                <div className="bg-white rounded-[12px] px-3 py-6 ">
                  <div className="mb-8">
                    <h2 className="text-[#222222] text-[24px] font-bold">
                      Login{" "}
                      <span className="w-[60px] h-[3px] inline-block rounded-[4px] bg-[#7878FF]"></span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[#222222] text-[16px] font-medium ">
                      Login with Email/Phone Number
                    </label>

                    <div className="flex items-center border border-[#E7E7E7] rounded-[12px] py-4">
                      {/* <span className="inline-block size-7 ps-[12px] w-[52px]">
                        +91
                      </span> */}
                      <input
                        type="text"
                        placeholder="Enter Your Email/Phone Number"
                        value={userCred}
                        onChange={(e) => setUserCred(e.target.value)}
                        className="w-full outline-none placeholder:text-[#B3B3B3] placeholder:text-[16px] focus:outline-none text-[16px] px-3 text-[#3F3F3F] font-medium"
                      />
                    </div>
                    {taUserFound && (
                      <p className="text-[12px] text-red-500">User Not Found</p>
                    )}

                    <button
                      className={`w-full  ${
                        userCred.length >= 5 && userCred.length <= 30
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      } text-[#fff] font-semibold rounded-[12px] py-4 mb-8`}
                      //   onClick={verifyTAPhoneNumber}
                      disabled={
                        !(userCred.length >= 5 && userCred.length <= 30)
                      }
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* OTP SCREEN */}
                <div className="bg-white rounded-[12px] px-3 py-6">
                  <div className="mb-8">
                    <h2 className="text-[#222222] text-[24px] font-bold">
                      <button
                      // onClick={() => setIsInputUserCred(!isInputUserCred)}
                      >
                        <ArrowBackIcon />
                      </button>{" "}
                      Enter OTP{" "}
                      <span className="w-[60px] h-[3px] inline-block rounded-[4px] bg-[#7878FF]"></span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[#222222] text-[16px] font-medium ">
                      Login With Phone Number
                    </label>

                    <div className="flex flex-col items-center w-full justify-center  rounded-[12px] py-4">
                      <OTPInput
                        className=""
                        value={agentOtp}
                        onChange={setAgentOtp}
                        numInputs={6}
                        renderSeparator={<span className="mx-4"></span>}
                        renderInput={(props) => (
                          <input
                            {...props}
                            type="number"
                            className="text-xl text-center  border-b-2  border-b-[#797979]  focus:outline-none focus:border-blue-500"
                            maxLength={1}
                            // placeholder="*"
                            style={{ width: "20px", height: "40px" }}
                          />
                        )}
                      />
                      {wrongTaOTP && (
                        <p className="text-[12px] text-red-500">Wrong OTP</p>
                      )}

                      <div className="w-full">
                        <div className="flex flex-col mt-8 justify-start text-[#797979] text-sm">
                          <p className="text-start">
                            (OTP has been sent to +91{" "}
                            {maskNumber(userCred) ?? "NA"})
                          </p>
                          <p className="mt-0">
                            <>
                              Didn&apos;t received OTP?{" "}
                              <button
                                onClick={() => verifyTAPhoneNumber()}
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
                    </div>

                    {/* <button className="primary_gradient_color text-[#fff] font-semibold rounded-[12px] py-4">
                    Validate
                  </button> */}

                    <button
                      disabled={agentOtp.length > 5 ? false : true}
                      className={`w-full ${
                        agentOtp.length > 5
                          ? "primary_gradient_color cursor-pointer"
                          : "bg-gray-200"
                      } text-[#fff] font-semibold rounded-[12px] py-4`}
                      //   onClick={verifyTAOTP}
                    >
                      Validate
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default LoginMobile;

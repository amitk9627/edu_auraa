import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import CountdownTimer from "./CountdownTimer";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RadioButtonCheckedTwoToneIcon from "@mui/icons-material/RadioButtonCheckedTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

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

  // 000--------------
  const [isInstituteLoginForm, setIsInstituteLoginForm] = useState(false);
  const [isInstituteEnterPhoneNumber, setIsInstituteEnterPhoneNumber] =
    useState(false);
  return (
    <div className="bg-white  py-6 px-2 flex flex-col gap-3 rounded-md w-[95%]">
      <div className="flex gap-3 items-center justify-center border-b border-[#e5e5e5] pb-6 w-[95%] mx-auto">
        <button
          onClick={() =>
            setFormType({
              ...formType,
              student: true,
              institute: false,
            })
          }
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
          onClick={() =>
            setFormType({
              ...formType,
              student: false,
              institute: true,
            })
          }
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
        <div className="flex flex-col gap-10 mt-4">
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
                      <p>
                        (OTP has been sent to +91 {maskNumber(phoneNo) ?? "NA"}{" "}
                        and registered email)
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
                    <span className="text-red-500">*</span> OTP is Valid for
                    <span className="text-[#0195C6]"> 05 Minutes</span>
                  </p>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="Phonenumber" className="block text-lg mb-2">
                      Email/Phone Number
                    </label>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        placeholder="Enter Your Number"
                        value={phoneNo}
                        size="small" // Makes it smaller
                        margin="dense"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </FormControl>
                    {userFound && (
                      <p className="text-[12px] text-red-500">User Not Found</p>
                    )}
                  </div>
                  <div>
                    {/*  */}
                    <button
                      className={`w-full  ${
                        phoneNo.length >= 5 && phoneNo.length <= 15
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      }
                         
                            text-white
                         py-3 px-2 rounded-lg text-xl font-semibold`}
                      // onClick={verifyPhoneNumber}
                      onClick={() => setIsEnterPhoneNumber(!isEnterPhoneNumber)}
                      // disabled={!(phoneNo.length >= 5 && phoneNo.length <= 15)}
                    >
                      Continue
                    </button>
                  </div>
                  <p>
                    Don't have an account{" "}
                    <button onClick={() => setIsLoginForm(!isLoginForm)}>
                      Register Now
                    </button>
                  </p>
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
                  size="small" // Makes it smaller
                  margin="dense"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  type="email"
                  label="Email Id"
                  placeholder="Enter Your Email ID"
                  size="small" // Makes it smaller
                  margin="dense"
                  //
                  //   value={emailId}
                  //   onChange={(e) => setEmailId(e.target.value)}
                />
              </FormControl>

              <TextField
                name="number"
                placeholder="Phone Number"
                // onChange={(e) => setRegisterPhoneNo(e)}
                // onChange={handlePhoneChange}
                size="small" // Makes it smaller
                margin="dense"
              />
              {error && (
                <p className="text-red-500 text-md">Already Exist User</p>
              )}
              <div>
                <button
                  className={`w-full py-3 px-2 rounded-lg text-xl bg-gray-600 text-white font-semibold`}
                  // onClick={registerUser}
                >
                  Register
                </button>
              </div>
              <p>
                Already have an account{" "}
                <button onClick={() => setIsLoginForm(!isLoginForm)}>
                  Login Now
                </button>
              </p>
            </div>
          )}
        </div>
      )}
      {formType.institute && (
        <div className="flex flex-col gap-10 mt-4">
          {isInstituteLoginForm ? (
            <>
              {isInstituteEnterPhoneNumber ? (
                <>
                  <div>
                    <div className="flex flex-col space-y-4">
                      <p className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setIsInstituteEnterPhoneNumber(
                              !isInstituteEnterPhoneNumber
                            )
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
                      <p>
                        (OTP has been sent to +91 {maskNumber(phoneNo) ?? "NA"}{" "}
                        and registered email)
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
                      } py-2 px-2 rounded-lg text-xl text-white font-semibold`}
                      // onClick={verifyOTP}
                      onClick={() => setIsEnterPhoneNumber(!isEnterPhoneNumber)}
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
                    <label htmlFor="Phonenumber" className="block text-lg mb-2">
                      Email/Phone Number
                    </label>

                    <FormControl fullWidth>
                      <TextField
                        type="text"
                        placeholder="Enter Your Number"
                        value={phoneNo}
                        size="small" // Makes it smaller
                        margin="dense"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </FormControl>
                    {userFound && (
                      <p className="text-[12px] text-red-500">User Not Found</p>
                    )}
                  </div>
                  <div>
                    {/*  */}
                    <button
                      className={`w-full bg-gray-400 text-white py-2 px-2 rounded-lg text-xl font-semibold`}
                      onClick={() =>
                        setIsInstituteEnterPhoneNumber(
                          !isInstituteEnterPhoneNumber
                        )
                      }
                    >
                      Continue
                    </button>
                  </div>
                  <p>
                    Don't have an institute account{" "}
                    <button
                      onClick={() =>
                        setIsInstituteLoginForm(!isInstituteLoginForm)
                      }
                    >
                      Register Now
                    </button>
                  </p>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-[6px]">
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="Institute Name"
                  placeholder="Enter Your Name"
                  size="small" // Makes it smaller
                  margin="dense"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  type="email"
                  label="Email Id"
                  placeholder="Enter Your Email ID"
                  size="small" // Makes it smaller
                  margin="dense"
                  //
                  //   value={emailId}
                  //   onChange={(e) => setEmailId(e.target.value)}
                />
              </FormControl>

              <TextField
                name="number"
                placeholder="Phone Number"
                label="Phone Number"
                size="small" // Makes it smaller
                margin="dense"
                // onChange={(e) => setRegisterPhoneNo(e)}
                // onChange={handlePhoneChange}
              />
              {error && (
                <p className="text-red-500 text-md">Already Exist User</p>
              )}
              <FormControl fullWidth>
                <TextField
                  type="text"
                  label="City"
                  placeholder="Enter Your City"
                  size="small" // Makes it smaller
                  margin="dense"
                  //   value={emailId}
                  //   onChange={(e) => setEmailId(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  type="type"
                  label="Address"
                  placeholder="Enter Your Address"
                  size="small" // Makes it smaller
                  margin="dense"
                  //
                  //   value={emailId}
                  //   onChange={(e) => setEmailId(e.target.value)}
                />
              </FormControl>
              <div>
                <button
                  className={`w-full py-3 px-2 rounded-lg text-xl bg-gray-600 text-white font-semibold`}
                  // onClick={registerUser}
                >
                  Register
                </button>
              </div>
              <p>
                Already have an account{" "}
                <button
                  onClick={() => setIsInstituteLoginForm(!isInstituteLoginForm)}
                >
                  Login Now
                </button>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginMobile;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userExist: false,
  _id: "",
  instituteId: "",
  userID: "",
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender: "",
  userType: "STUDENT",
  isLogin: true
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      console.log(action.payload);
    },
    setUserExist: (state, action) => {
      state.user = action.payload;
    },
    addUserInfo: (state, action) => {
      let { info } = action.payload;
      console.log("info", info);
      state.userExist = true;
      state.firstName = info.firstName;
      state._id = info._id;
      state.instituteId = info.instituteId;
      state.userID = info.userId;
      state.lastName = info.lastName;
      state.email = info.email;
      state.contact = info.email;
      state.gender = info.gender;
    },
    clearUserDetails: (state, action) => {
      state.userExist = false;
      state.firstName = "";
      state._id = "";
      state.instituteId = "";
      state.userID = "";
      state.lastName = "";
      state.email = "";
      state.contact = "";
      state.gender = "";
      state.userType = "STUDENT";
    },
    handleLoginRegister: (state, action) => {
      state.isLogin = action.payload
    }
  },
});

export const { setUserExist, addUserDetails, addUserInfo, clearUserDetails, handleLoginRegister } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userExist: false,
  studentDetails: {
    studentId: "",
    name: "",
    contact: "",
    email: "",
  },
  instituteDetails: {
    instituteId: "",
    name: "",
    contact: "",
    state: "",
    city: "",
    email: "",
  },
  userType: "student",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;

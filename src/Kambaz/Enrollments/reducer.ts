import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

// Define the structure of enrollment
interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

// Load enrollments from local storage if available
const savedEnrollments: Enrollment[] = JSON.parse(localStorage.getItem("enrollments") || "null") || initialEnrollments;

const initialState = {
  enrollments: savedEnrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {

    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },

    enroll: (state, { payload }: { payload: Enrollment }) => {
      state.enrollments.push(payload);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenroll: (state, { payload }: { payload: { user: string; course: string } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) => enrollment.user !== payload.user || enrollment.course !== payload.course
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrolledCourseIds: number[];
}

const initialState: EnrollmentState = {
  enrolledCourseIds: [],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<number>) => {
      if (!state.enrolledCourseIds.includes(action.payload)) {
        state.enrolledCourseIds.push(action.payload);
      }
    },
    unenrollCourse: (state, action: PayloadAction<number>) => {
      state.enrolledCourseIds = state.enrolledCourseIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

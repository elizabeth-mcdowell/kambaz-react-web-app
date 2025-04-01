import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer.ts";
import accountReducer from "./Account/reducer.ts";
import assignmentReducer from "./Courses/Assignments/reducer.ts";
import coursesReducer from  "./Courses/reducer.ts";
import enrollmentsReducer from "./Enrollment/reducer.ts";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    coursesReducer,
    enrollmentsReducer,
  },
});
export default store;


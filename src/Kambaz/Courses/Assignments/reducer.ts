/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import database from "../../Database/index.js";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: database.assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {


    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },


    addAssignment: (state, { payload: assignment }) => {
      // Since uuid is generated on the frontend, no need to regenerate here
      state.assignments.push({
        ...assignment, // use all assignment data coming from payload
        _id: uuidv4(), // Ensure _id is generated here if not in payload
        availableto: assignment.availableto || "", // Make sure this is handled if it's empty
      });
    },
      
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },

  
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },

  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;


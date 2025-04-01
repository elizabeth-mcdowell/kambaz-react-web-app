/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const findMyCourses = async () => {
  console.log("Calling find my courses from account/clients");
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`); //"/api/users/:userId/courses
  console.log("Here is the data", data);
  return data;
};

export const signin = async (credentials: any) => {
  console.log("Calling signing in account/clients");
  const response = await axiosWithCredentials.post( `${USERS_API}/signin`, credentials );
  console.log("signed in from accounts/clients", response.data);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};


export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};


export const updateUser = async (user: any) => {
  console.log("Getting user id for update", user._id);
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  console.log("returning:", response);
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

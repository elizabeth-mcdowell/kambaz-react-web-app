/* eslint-disable @typescript-eslint/no-explicit-any */
import Profile from "./Profile.tsx";
import Signin from "./Signin.tsx";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./Signup.tsx";
//import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
      <div id="wd-account-screen">
        <table>
          <tbody>
            <tr>
            <td valign="top">
            {/** <AccountNavigation />*/}  
            </td>
            <td valign="top">
              <Routes>
                <Route path="/"        element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin"} />} />
                <Route path="/Signin"  element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup"  element={<Signup />} />
              </Routes>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
  );}
  
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  console.log("on navigation!!!")
  return (
    <div className="me-5" id="wd-account-navigation">
        {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
      {links.map((link) => (
        <Link
          to={`/Kambaz/Account/${link}`} id={`wd-${link.toLocaleLowerCase()}-link`}
          className={`list-group-item text-center ps-2 mb-2 ${pathname.includes(link)}`}
        >
          {link}
        </Link>
      ))}
    </div>
);}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div className="me-5" id="wd-account-navigation">
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

/* eslint-disable @typescript-eslint/no-explicit-any */
//import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details.tsx";
import { Link } from "react-router";
//import React, { useState, useEffect } from "react";
export default function PeopleTable({ users = [] }: { users?: any[] }) {


 return (
  <div id="wd-people-table">
  <PeopleDetails />
  {users
        .map((user) => (
          <tr key={user._id}>
            <td className="wd-full-name text-nowrap">
              <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </Link>
            </td>
            ...
          </tr>
      ))}

</div>

   );}
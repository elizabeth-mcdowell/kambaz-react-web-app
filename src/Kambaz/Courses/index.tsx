/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseNavigation from "./Navigation.tsx";
import Modules from "./Modules/index.tsx";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";
import AssignmentEditor from "./Assignments/Editor.tsx";
import { Navigate, Route, Routes, useParams, useLocation   } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
//import PeopleTable from "./People/Table.tsx"; liz change - was og users
import { useSelector } from "react-redux";
import Users from "../Account/Users.tsx";

export default function Courses() {
  
  const { cid } = useParams();
  const { pathname } = useLocation();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const course = courses.find((course: any) => course._id === cid);
  return (
    <div id="wd-courses">

      <h2 className="text-danger"> <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]}
      </h2><hr />


       <div className="d-flex">
        <div className="d-none d-md-block">

            <CourseNavigation />
        </div>
        <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Modules" element={<h2>Modules</h2>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={ <AssignmentEditor />}/>
              <Route path="Grades" element={ "Grades - make page"}/>
              <Route path="People" element={<Users />} />
            </Routes>
            </div></div>
    </div>
  );
}

// right now the routses are just placeholders. We will implement each screen later. 

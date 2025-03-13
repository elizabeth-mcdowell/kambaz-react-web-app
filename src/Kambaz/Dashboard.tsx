/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { enrollStudent, unenrollStudent } from "./Enrollment/reducer";
import { FormControl } from "react-bootstrap";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: Dispatch<SetStateAction<any>>;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer?.enrollments || []);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);

  if (!currentUser) {
    navigate("#/Kambaz/Account/Signin");
  }

  useEffect(() => {
    if (!courses || !enrollments) return;

    if (currentUser?.role === "STUDENT") {
      setFilteredCourses(
        showAllCourses
          ? courses
          : courses.filter((course) =>
              enrollments.some(
                (enrollment: { user: string; course: string }) =>
                  enrollment.user === currentUser?._id && enrollment.course === course._id
              )
            )
      );
    } else {
      setFilteredCourses(courses);
    }
  }, [courses, enrollments, currentUser, showAllCourses]);

  const handleEnroll = (courseId: string) => {
    dispatch(enrollStudent({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollStudent({ userId: currentUser._id, courseId }));
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" id="wd-update-course-click" onClick={updateCourse}>
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      {currentUser?.role === "STUDENT" && (
        <button className="btn btn-info mb-3" onClick={() => setShowAllCourses(!showAllCourses)}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>

      <div className="row" id="wd-dashboard-course">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: { user: string; course: string }) =>
                enrollment.user === currentUser?._id && enrollment.course === course._id
            );

            return (
              <div key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <div className="wd-dashboard-course-link text-decoration-none text-dark">
                  <img src={course.photo} width="100%" height={160} alt="Course" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course?.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course?.description || "No description available"}
                    </p>
                    <button className="btn btn-primary me-2" onClick={() => navigate(`/Kambaz/Courses/${course._id}`)}>
                      Go
                    </button>
                    {currentUser?.role === "FACULTY" && (
                      <>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger  me-2 float-end"
                    id="wd-delete-course-click">
                    Delete
                   </button>

                    <button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Edit
                  </button>
                  </>
                    )}
                    {currentUser?.role === "STUDENT" &&
                      (isEnrolled ? (
                        <button className="btn btn-danger" onClick={() => handleUnenroll(course._id)}>
                          Unenroll
                        </button>
                      ) : (
                        <button className="btn btn-success" onClick={() => handleEnroll(course._id)}>
                          Enroll
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//import * as db from "./Database";
//import React, { useState } from "react";
//import { v4 as uuidv4 } from 'uuid'
import { useSelector } from "react-redux";
import * as db from "./Database";
export default function Dashboard( {
    courses, 
    course, 
    setCourse, 
    addNewCourse,
    deleteCourse, 
    updateCourse }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; }){

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = db;
  
   //change id?
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      {currentUser?.role === "FACULTY" &&(
        <>
      <h5>
        New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add 
          </button>
    
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">Update
          </button>
        </h5><br />
      <FormControl value={course.name} className="mb-2"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description}
             onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

      </>
      )}


      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">

      <Row xs={1} md={5} className="g-4">
      {courses.filter((course) =>
        enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
         ))
         .map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.photo} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>

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


                  </div>
                </Link>
              </Card>
            </Col>
          ))}
      </Row>
      </div>
    </div>
);}


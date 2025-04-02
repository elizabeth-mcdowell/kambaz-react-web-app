/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from 'react-bootstrap';
import {useParams } from 'react-router';
import { addAssignment, updateAssignment } from './reducer.ts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
//    { "_id": ""title": " "course": "RS103", "availablefrom": "availableto":
//"due":", "points":"1description":
import * as AssignmentsClient from "./client.ts";
export default function AssignmentEditor() {
  const {cid, aid } = useParams();
  const dispatch = useDispatch();
 

  const assignments = useSelector(
    (state: any) => state.assignmentReducer.assignments
  );

  // If aid exists, find the assignment; otherwise, create a new blank one
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: uuidv4(), // Generate unique ID on save
      title: "",
      course: cid, 
      availablefrom: "",
      availableto: "",
      due: "",
      points: "",
      description: "",
    }
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAssignment({ ...assignment, [e.target.id]: e.target.value });
  };
  // Save Assignment (Update if exists, Add if new)
  const handleSave = async (assignment: any) => {
    if (existingAssignment) {
      console.log("Editing", assignment) // Update existing
      await AssignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));

    } else {
      console.log("Create new",assignment);
      await AssignmentsClient.createAssignment(assignment);
      dispatch(addAssignment(assignment));

       // Create new
    }
  };
 
  return (
    <div className="ms-4" id="wd-assignments-editor">
      <h1>{existingAssignment ? "Edit Assignment" : "Create New Assignment"}</h1>
      <Row><label htmlFor="wd-name">Assignment Name</label></Row>
      <input
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        className="form-control"
        placeholder="Assignment Title"
      />
      <Row><label htmlFor="wd-description" id="wd-description">Description Name</label></Row>
      <textarea
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="form-control"
        placeholder="Description"
      />
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-points">
            Points
          </label>
        </Col>
        <Col>
        <input
        type="number"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: e.target.value })
        }
        className="form-control mb-2"
        placeholder="Points"
      />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-group">
            Assignment Group
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-group" onChange={handleChange}>
            <option selected value="ASSIGNMENTS"> Assignments</option>
            <option value="OTHER">Other</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-display-grade-as">
            Display Grade as
          </label>
        </Col>
        <Col>
          <select className="form-select" id="wd-display-grade-as" onChange={handleChange}>
            <option selected value="PERCENTAGE">Percentage</option>
            <option value="FRACTION">Fraction</option>
            <option value="OTHER">Other</option>
          </select>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" id="wd-submission-type">Submission Type</label>
        </Col>
        <Col>
          <div className="form-control">
            <select className="form-select mt-2" id="wd-submission-type" onChange={handleChange}>
              <option selected value="ONLINE">Online</option>
              <option value="INPERSON">In Person</option>
              <option value="OTHER">Other</option>
            </select>
            <br />
            <strong className="mt-3">Online Entry Type:</strong>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-text-entry">
                Text Entry
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-student-annotation"
              /> 
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check mt-3 mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Uploads
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end">Assign</label>
        </Col>
        <Col>
          <div className="form-control">
            <label htmlFor="wd-assign-to">
              <strong className="mt-2">Assign to</strong>
            </label>
            <select className="form-select" id="wd-assign-to">
              <option selected value="EVERYONE">Everyone</option>
              <option value="OTHER">Other</option>
            </select>
            <label className="mt-2" htmlFor="wd-due-date">
              <strong>Due</strong>
            </label>
            <input
                type="String"
                value={assignment.due}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
                className="form-control mb-2"
                placeholder="Due"
              />
            <div className="d-flex flex-row justify-content-evenly mb-3">
              <div className="me-2" style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                type="String"
                value={assignment.availablefrom}
                onChange={(e) =>
                  setAssignment({ ...assignment, availablefrom: e.target.value })
                }
                className="form-control mb-2"
                placeholder="Available From"
              />
              </div>
              <div style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                type="String"
                value={assignment.availableto}
                onChange={(e) =>
                  setAssignment({ ...assignment, availableto: e.target.value })
                }
                className="form-control mb-2"
                placeholder="Available Until"
              />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />

      <div className="d-flex flex-row justify-content-end">
      <a href={`#/Kambaz/Courses/${cid}/Assignments`} >
        <Button variant="secondary" className="ms-2 mb-3" id="wd-add-group-btn">
          Cancel

        </Button>
      </a>
        <a href={`#/Kambaz/Courses/${cid}/Assignments`} >
        <Button variant="danger" onClick={() => handleSave(assignment)} className="ms-2 mb-3" id="wd-add-group-btn">
          Save
        </Button>
        </a>
      </div>
    </div>
  );
}

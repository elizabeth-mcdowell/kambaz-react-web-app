/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import * as db from "../../Database";
export default function AssignmentEditor() {
  const { aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(
      (a:any) => a._id === aid);
  if (!assignment){
    return "No assignment go back"; //need this to get rid of the error with the buttons
  }
  return (
    <div className="ms-4" id="wd-assignments-editor">
      <Row><label htmlFor="wd-name">Assignment Name</label></Row>
      <Row><input className="form-control" type="text" id="wd-name" value={assignment?.title} /></Row>

      <Row className="mt-3">
        <textarea className="form-control" id="wd-description" rows={6}>
        {assignment?.description}
        </textarea>
      </Row>
      <Row className="mt-3">
        <Col xs={3}>
          <label className="float-end" htmlFor="wd-points">
            Points
          </label>
        </Col>
        <Col>
          <input
            className="form-control"
            type="number"
            id="wd-points"
            value={assignment?.points}
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
          <select className="form-select" id="wd-group">
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
          <select className="form-select" id="wd-display-grade-as">
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
            <select className="form-select mt-2" id="wd-submission-type">
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
              className="form-control"
              type="String"
              id="wd-due-date"
              value={assignment?.due}
            />
            <div className="d-flex flex-row justify-content-evenly mb-3">
              <div className="me-2" style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  className="form-control"
                  type="String"
                  id="wd-available-from"
                  value={assignment?.availablefrom}
                />
              </div>
              <div style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  className="form-control"
                  type="String"
                  id="wd-available-until"
                  value={assignment?.availableto}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />

      <div className="d-flex flex-row justify-content-end">
      <a href={`#/Kambaz/Courses/${assignment.course}/Assignments`} >
        <Button variant="secondary" className="ms-2 mb-3" id="wd-add-group-btn">
          Cancel

        </Button>
      </a>
        <a href={`#/Kambaz/Courses/${assignment.course}/Assignments`} >
        <Button variant="danger" className="ms-2 mb-3" id="wd-add-group-btn">
          Save
        </Button>
        </a>
      </div>
    </div>
  );
}

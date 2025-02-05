import { Button, Col, Row } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <div className="ms-4" id="wd-assignments-editor">
      <Row><label htmlFor="wd-name">Assignment Name</label></Row>
      <Row><input className="form-control" type="text" id="wd-name" value="A1" /></Row>

      <Row className="mt-3">
        <textarea className="form-control" id="wd-description" rows={6}>
        The assignment is available online Submit a link to the landing page of
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
            value={100}
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
              type="date"
              id="wd-due-date"
              value="2025-05-13"
            />
            <div className="d-flex flex-row justify-content-evenly mb-3">
              <div className="me-2" style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-from">
                  <strong>Available from</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-available-from"
                  value="2000-01-21"
                />
              </div>
              <div style={{ width: '100%' }}>
                <label className="mt-2" htmlFor="wd-available-until">
                  <strong>Until</strong>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-available-until"
                  value="2000-01-21"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex flex-row justify-content-end">
        <Button variant="secondary" className="ms-2 mb-3" id="wd-add-group-btn">
          Cancel
        </Button>
        <Button variant="danger" className="ms-2 mb-3" id="wd-add-group-btn">
          Save
        </Button>
      </div>
    </div>
  );
}
// //testing key 
// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <label htmlFor="wd-name"><b>Assignment Name</b><br/><br/></label>
//         <input id="wd-name" value="A1 - ENV + HTML" /><br/><br/>
//         <textarea id="wd-description">
//           The assignment is available online Submit a link to the landing page of
//         </textarea>
//         <br />
//         <br/>
    
//         <table>
//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//               <input id="wd-points" value={100} />
//                <br/>
//             </td>
//           </tr>
//           <br/>
  
//         <tr>
//             <td align="right"valign="top">
//                     <label  htmlFor="wd-group"> Assignment Group: </label>
//             </td>
//             <td>
//                     <select id="wd-group">
//                     <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                     <option value="OTHER">OTHER</option>
//                     </select>
//             </td>
//         </tr>
//         <br/>

//         <tr>
//             <td align="right" valign="top">
//             <label  htmlFor="wd-display-grade-as"> Display Grade as: </label>
//             </td>
//             <td>
//                     <select id="wd-display-grade-as">
//                     <option value="PERCENTAGE">PERCENTAGE</option>
//                     <option value="FRACTION">FRACTION</option>
//                     <option value="OTHER">OTHER</option>
//                     </select>
//             </td>
//         </tr>
//         <br/>

//         <tr>
//             <td align="right" valign="top">
//             <label  htmlFor="wd-submission-type	 "> Submission Type: </label>
//             </td><td>
//                     <select id="wd-submission-type">
//                     <option value="ASSIGNMENTS">ONLINE</option>
//                     <option value="ASSIGNMENTS">INPERSON</option>
//                     <option value="OTHER">OTHER</option>
//                     </select>
//             </td>
//         </tr>
//         <br/>

//         <tr>
//             <td align="right" valign="top"></td>
//             <td align="left" valign="top">
//                 <label>Online Entry Type:</label><br/>
//                 <input type="checkbox" name="check-entry-type" id="wd-text-entry"/>
//                 <label htmlFor="wd-text-entry">Text Entry </label><br/>


//                 <input type="checkbox" name="check-entry-type" id="wd-website-url"/>
//                 <label htmlFor="wd-website-url"> Website URL  </label><br/>


//                 <input type="checkbox" name="check-entry-type" id="wd-media-recordings"/>
//                 <label htmlFor="wd-media-recordings">Media Recordings </label><br/>


//                 <input type="checkbox" name="check-entry-type" id="wd-student-annotation"/>
//                 <label htmlFor="wd-student-annotation"> Student Annotation  </label><br/>


//                 <input type="checkbox" name="check-entry-type" id="wd-file-upload	"/>
//                 <label htmlFor="wd-file-upload">  File Uploads </label><br/>
//             </td>
//         </tr>
//         <br/>

       
//         <tr>
//             <td align="right" valign="top">
//                 <label htmlFor="wd-assign-to">Assign</label>
//             </td>
//             <td>
//                 <label htmlFor="wd-assign-to">Assign To</label><br/>
//                 <select id="wd-assign-to">
//                 <option value="EVERYONE">Everyone</option>
//                 <option value="OTHER">Other</option>
//                 </select>
//             </td>
//         </tr>
//         <br/>

//         <tr>
//         <td align="right"valign="top"></td>
//             <td>
//             <label htmlFor="wd-due-date">Due</label><br/>
//             <input type="date" value="2000-01-21" id="wd-due-date" /><br />
//         </td>
//         </tr>
//         <br/>

//         <tr>
//         <td align="right"valign="top"></td>
//         <td align="left" valign="top">
//             <label htmlFor="wd-available-from">Available From</label><br />
//             <input type="date" value="2000-01-21" id="wd-available-from" /><br />
//         </td>
//         <br/>
        
//         <td align="left" valign="top">
//             <label htmlFor="wd-available-until">Until</label><br />
//             <input type="date" value="2000-01-21" id="wd-available-until" /><br />
//         </td>
//         </tr>
//         </table>

//         <hr style={{ margin: "20px 0", borderTop: "1px solid #ccc" }} />

//         <div style={{ textAlign: 'right' }}>
//                 <button type="button"
//                         onClick={() => alert("Will be cancel")}
//                         id="wd-cancel">
//                     Cancel
//                 </button>
            
//                 <button type="button"
//                             onClick={() => alert("Will be save")}
//                             id="wd-save">
//                     Save
//                 </button>
//         </div>





//       </div>
//   );}
  
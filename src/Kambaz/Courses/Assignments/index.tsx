import { ListGroup, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControl from "./AssignmentsControl";
import AssignmentControlButtons from "./AssignmentsControl";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Assignments() {
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="input-group mb-3 float-left" style={{ width: "50%" }}>
          <span className="input-group-text">
            <IoSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="ms-auto d-flex">
          <Button variant="secondary" size="lg" className="ms-2 mb-3">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
          <Button variant="danger" size="lg" className="ms-2 mb-3">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
        </div>
      </div>

      
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          

          <div className="wd-title p-3 ps-2 bg-secondary">
            
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            ASSIGNMENTS  
          <div className="float-end">
            <FaPlus />
            <AssignmentControlButtons />
          </div> 


          </div>

      
          <ListGroup className="wd-lessons rounded-0">
            
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="fs-3 me-3 text-success" />
              <div className="d-flex flex-column">
                <strong>A1 - ENV + HTML</strong>
                <div className="fs-6">
                  <strong className="text-danger">Multiple Modules</strong> |  
                  <strong> Not available until</strong> May 6 at 12:00am |  
                  <strong> Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <GreenCheckmark />
              <a href="#/Kambaz/Courses/1234/Assignments/1" className="wd-assignment-link">  <AssignmentsControl /></a>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="fs-3 me-3 text-success" />
              <div className="d-flex flex-column">
                <strong>A2 - CSS + BOOTSTRAP</strong>
                <div className="fs-6">
                  <strong className="text-danger">Multiple Modules</strong> |  
                  <strong> Not available until</strong> May 13 at 12:00am |  
                  <strong> Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <GreenCheckmark />
              <a href="#/Kambaz/Courses/1234/Assignments/2" className="wd-assignment-link">  <AssignmentsControl /></a>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />

              <MdOutlineAssignment className="fs-3 me-3 text-success" />
              <div className="d-flex flex-column">
                <strong>A3 - JAVASCRIPT + REACT</strong>
                <div className="fs-6">
                  <strong className="text-danger">Multiple Modules</strong> |  
                  <strong> Not available until</strong> May 20 at 12:00am |  
                  <strong> Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <GreenCheckmark />
              <a href="#/Kambaz/Courses/1234/Assignments/3" className="wd-assignment-link">  <AssignmentsControl /></a>
            </ListGroup.Item>

          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}


// export default function Assignments() {
//     return (
//       <div id="wd-assignments">
//         <input placeholder="Search for Assignments"
//                id="wd-search-assignment" />
//         <button id="wd-add-assignment-group">+ Group</button>
//         <button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button> </h3>
//         <ul id="wd-assignment-list">
//           <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/1"
//                className="wd-assignment-link" >
//               A1 - ENV + HTML
//             </a> 
//             </li>
//             Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts

//             <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/2"
//                className="wd-assignment-link" >
//               A2 - CSS + BOOTSTRAP
//             </a> 
//             </li>
//             Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
            

            
            
//             <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/3"
//                className="wd-assignment-link" >
//               A3 - JAVASCRIPT + REACT
//             </a> 
//             </li>
//             Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
            

        
//         </ul>
//       </div>
//   );}
  
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControl from "./AssignmentsControl";
import AssignmentControlButtons from "./AssignmentsControl";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments || [])
    .filter((assignment: any) => assignment.course === cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  
  const handleDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
  };

  const confirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
    }
  };

  return (
    <div>
      <div className="d-flex flex-row">
        <div className="input-group mb-3 float-left" style={{ width: "50%" }}>
          <span className="input-group-text">
            <IoSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>


        {currentUser?.role === "FACULTY" &&(
              <>
        <div className="ms-auto d-flex">
          <Button variant="secondary" size="lg" className="ms-2 mb-3">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
          <Button 
            variant="danger" 
            size="lg" 
            className="ms-2 mb-3"
            href="#/Kambaz/Courses/RS101/Assignments/new" 
            >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </Button>
        </div>
        </>
        )}
      </div>
 
      
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5">
          

          <div className="wd-title p-3 ps-2 bg-secondary">
            
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            ASSIGNMENTS  
          <div className="float-end">
            <FaPlus />
            <AssignmentControlButtons />
          </div> 

          </div>

          <ul id="wd-assignments" className="wd-lessons list-group rounded-0 m-0 p-0">
            {assignments
            .filter((assignment:any) => assignment.course === cid)
            .map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 d-flex align-items-center border-bottom">
                <BsGripVertical className="me-2 fs-3" /> 
                <MdOutlineAssignment className="fs-3 me-3 text-success" />
                <div className="d-flex flex-column">
                <strong>{assignment.title}</strong>

                <div className="fs-6">
                  <strong className="text-danger">Multiple Modules</strong> |  
                  <strong> Not available until</strong> {assignment.availablefrom} |  
                  <strong> Due</strong> {assignment.due} | {assignment.points} pts
                </div>
              </div>
              {currentUser?.role === "FACULTY" &&(
              <>
              <button className="btn btn-danger btn-sm ms-auto" style={{ maxWidth: "30px" }}onClick={() => handleDelete(assignment._id)}>
                  <FaTrash />
              </button>
              </> )}
              <GreenCheckmark />
              {currentUser?.role === "FACULTY" &&(
              <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`} className="wd-assignment-link">  <AssignmentsControl /></a>)}
              </li>
            ))
            }
          </ul>

        </ListGroup.Item>
      </ListGroup>

      {assignmentToDelete && (
        <div className="modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={() => setAssignmentToDelete(null)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setAssignmentToDelete(null)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
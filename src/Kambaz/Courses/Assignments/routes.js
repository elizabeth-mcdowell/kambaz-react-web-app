import * as assignmentsDao from "./dao.js";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentRoutes(app) {
    
    //create
    app.post("/api/assignments", async (req, res) => {
        const newAssignment = req.body;
        const createdAssignment = await assignmentsDao.createAssignment(newAssignment);
        res.send(createdAssignment);
      });

      //retrieve
      app.get("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = await assignmentsDao.findAssignmentById(assignmentId);
        res.send(assignment);
      });
    // Update 
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

    
    // Delete 
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}

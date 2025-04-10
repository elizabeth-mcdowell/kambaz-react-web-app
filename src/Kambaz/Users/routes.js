import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollment/dao.js";
import session from "express-session";
// let currentUser = null;
export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
};

  const findAllUsers = async (req, res) => {
    const { role,name } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    if (name) {
      const users = await dao.findUsersByPartialName(name);
      res.json(users);
      return;
    }

    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/users/:userId", findUserById);


  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const userUpdates = req.body;
    await dao.updateUser(userId, userUpdates);
    const currentUser = req.session["currentUser"];
   if (currentUser && currentUser._id === userId) {
     req.session["currentUser"] = { ...currentUser, ...userUpdates };
   }
    res.json(currentUser);
  };


const signup = async  (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };


  app.post("/api/users/signup", signup); //not sure if this line is needed
  
  const signin = async (req, res) => {
    console.log("Sign in BEING TRIGGERED");
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("current currentUser is:", currentUser);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      console.log("Saved current user properly:", req.session["currentUser"]);
      res.json(currentUser);
    } else {
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };



  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };


  const profile = (req, res) => {
    console.log("Profile const in route working?", req.session)
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  //Glitch here liz debug
  const findCoursesForEnrolledUser = (req, res) => {
    console.log("Called findcourses for enrolled user");
    console.log("req.session is:", req.session);
    let { userId } = req.params;
    console.log("the id is", userId);
    console.log("req.session is:", req.session);
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      console.log("Getting current user", currentUser);
      if (!currentUser) {
        res.sendStatus(401);
        console.log("Issue with current user in findcourses for enroll user");
        return;
      }
      userId = currentUser._id;
    }
    console.log("Got user id", userId);
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    console.log("Got courses", courses);
    res.json(courses);
  };

  
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);








  const createCourse = (req, res) => {
    const currentUser = req.session["currentUser"];
    const newCourse = courseDao.createCourse(req.body);
    enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };
  app.post("/api/users/current/courses", createCourse);
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
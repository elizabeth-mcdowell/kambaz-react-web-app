import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "../src/Kambaz/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./../src/Kambaz/Courses/routes.js";
import ModuleRoutes from '../src/Kambaz/Courses/Modules/routes.js';
import AssignmentRoutes from '../src/Kambaz/Courses/Assignments/routes.js';
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(
    cors({
      credentials: true,
      origin: process.env.NETLIFY_URL || "http://localhost:5173" || 'https://elizabeth-kambazapp.netlify.app' || 'https://kambaz-a6.netlify.app',
    })
   );



   //correct for deploying actual
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none", //
      secure: true, //
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }

//when working local
//    const sessionOptions = {
//     secret: process.env.SESSION_SECRET || "kambaz",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       sameSite: "lax", 
//       secure: process.env.NODE_ENV === "production",
//       httpOnly: true,
//     }
// };

app.use(session(sessionOptions));
app.use(express.json());    //After config cors and session but before

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)
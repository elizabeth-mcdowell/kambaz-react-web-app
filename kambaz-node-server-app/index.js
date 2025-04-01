import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "../src/Kambaz/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "./../src/Kambaz/Courses/routes.js";
import ModuleRoutes from '../src/Kambaz/Courses/Modules/routes.js';


const app = express();

app.use(
    cors({
      credentials: true,
      origin: process.env.NETLIFY_URL || "http://localhost:5173",
    })
   );

   const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "lax", 
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    }
};

   
// const sessionOptions = {
//     secret: process.env.SESSION_SECRET || "kambaz",
//     resave: false,
//     saveUninitialized: false,
//   };
//   if (process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none", //CHANGE to none for development liz debug liz change
//       secure: process.env.NODE_ENV === "production", //CHANGE to trueFOR DEVELOPMENT Liz debug liz change
//       domain: process.env.NODE_SERVER_DOMAIN,
//     };
//   }
app.use(session(sessionOptions));
app.use(express.json());    //After config cors and session but before

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)
import Lab1 from "./Lab1/index.tsx";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC.tsx";
import Lab2 from "./Lab2/index.tsx";
import Lab3 from "./Lab3/index.tsx";
import Lab4 from "./Lab4/index.tsx";
import Lab5 from "./Lab5/index.tsx";
import Lab6 from "./Lab6/index.tsx";
import store from "./store/index.ts";
import { Provider } from "react-redux";
export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
      <h1>Labs</h1>
      <h2>Elizabeth McDowell - CS4550 02 Spring 2025</h2>
      <a href="https://github.com/elizabeth-mcdowell/kambaz-react-web-app.git" id="wd-github"> Github Repo </a>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
        <Route path="Lab5/*" element={<Lab5 />} />
        <Route path="Lab6/*" element={<Lab6 />} />
      </Routes>
    </div>
    </Provider>
);}


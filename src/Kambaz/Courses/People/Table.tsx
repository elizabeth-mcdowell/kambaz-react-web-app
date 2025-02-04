import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
        <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Tony</span>{" "}
            <span className="wd-last-name">Stark</span></td>
        <td className="wd-login-id">001234561S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">10:21:32</td></tr>
            {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
    
    
    
        <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Richard</span>{" "}
          <span className="wd-last-name">Grayson</span></td>
        <td className="wd-login-id">00149208</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-05</td>

        <td className="wd-total-activity">6:50:32</td></tr>
        <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Timothy</span>{" "}
          <span className="wd-last-name">Drake</span></td>
        <td className="wd-login-id">135790</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">10:58:22</td></tr>

        <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Cassandra</span>{" "}
          <span className="wd-last-name">Cain</span></td>
        <td className="wd-login-id">246801</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-11-03</td>
        <td className="wd-total-activity">7:21:32</td></tr>

        <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Stephanie</span>{" "}
          <span className="wd-last-name">Brown</span></td>
        <td className="wd-login-id">98765433</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-9-33</td>
        <td className="wd-total-activity">15:21:32</td></tr>

        <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Alfred</span>{" "}
          <span className="wd-last-name">Pennyworth</span></td>
        <td className="wd-login-id">00910091</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">TA</td>
        <td className="wd-last-activity">2020-9-33</td>
        <td className="wd-total-activity">15:21:32</td></tr>
    </tbody>
   </Table>
  </div> );}
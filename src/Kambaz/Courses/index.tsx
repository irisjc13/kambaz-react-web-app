import { Routes, Route, Navigate } from "react-router";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";

export default function Courses() {
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
             <FaAlignJustify className="me-4 fs-4 mb-1" />
             Course 1234 </h2> <hr />
        <hr />
      {/* <table>
        <tr>
          <td valign="top"> */}
            <div className="d-flex">
            <div className="d-none d-md-block">
            <CourseNavigation />
          {/* </td>
          <td valign="top"> */}
            </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
            </div></div>
          {/* </td>
        </tr>
      </table> */}
      </div>
  );}
  
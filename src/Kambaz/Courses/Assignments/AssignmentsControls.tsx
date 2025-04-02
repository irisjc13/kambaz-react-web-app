import { FaPlus, FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid } = useParams<{ cid: string }>();
  return (
    <div id="wd-assignment-controls" className="text-nowrap mb-3">
      <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
        <Button variant="danger" size="lg" className="me-1" id="wd-add-assignment-btn">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </Link>
      <Button variant="danger" size="lg" className="me-1" id="wd-add-group-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      <input type="text" id="searchbar" placeholder="Search..." className="ms-2" />
      <button type="submit" className="ms-2">
        <FaSearch />
      </button>
    </div>
  );
}

import { useParams, useLocation, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function CourseNavigation() {
  // Retrieve the current course's ID from the URL parameters.
  const { cid } = useParams();
  // Retrieve the current pathname to determine active styling.
  const { pathname } = useLocation();

  // Define the navigation labels.
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      {links.map((label) => {
        // Build the URL using the current course's ID.
        const to = `/Kambaz/Courses/${cid}/${label}`;
        // Check if the current pathname includes the label (case-insensitive) to mark it as active.
        const isActive = pathname.toLowerCase().includes(`/${label.toLowerCase()}`);
        return (
          <ListGroup.Item
            key={label}
            as={Link}
            to={to}
            id={`wd-course-${label.toLowerCase()}-link`}
            className={`list-group-item border border-0 text-start ${isActive ? "active" : "text-danger"}`}
          >
            {label}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

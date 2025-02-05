import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { FaSearch, FaPlus, FaGripVertical, FaFileAlt } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex align-items-center mb-4">

        <div className="flex-grow-1 me-3">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              id="wd-search-assignment"
              placeholder="Search for Assignments"
              aria-label="Search for Assignments"
            />
          </InputGroup>
        </div>

        <Button
          id="wd-add-assignment-group"
          variant="secondary"
          className="me-2 text-nowrap"
        >
          <FaPlus className="me-1" />
          Group
        </Button>


        <Button id="wd-add-assignment" variant="danger" className="text-nowrap">
          <FaPlus className="me-1" />
          Assignment
        </Button>
      </div>


      <div className="d-flex align-items-center mb-2">
        <h3 className="flex-grow-1 mb-0" id="wd-assignments-title">
          ASSIGNMENTS 40% of Total
        </h3>
        <Button variant="secondary" size="sm">
          <FaPlus />
        </Button>
      </div>
      <hr />


      <ListGroup id="wd-assignment-list">

        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-top border-gray">
          <div className="d-flex align-items-center">

            <div className="me-3 d-flex align-items-center text-muted">
              <FaGripVertical className="fs-5 me-2" />
              <FaFileAlt className="fs-5" />
            </div>

            <a
              className="wd-assignment-link flex-grow-1"
              href="#/Kambaz/Courses/1234/Assignments/123"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="wd-title p-3 ps-2 bg-white d-flex flex-column">
                <div className="fw-bold">A1 - ENV + HTML</div>
                <div className="text-danger">Multiple Modules</div>
                <div className="text-muted">
                  <strong>Not available until</strong> May 6 at 12:00am |{" "}
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </a>

            <div className="ms-auto p-3">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>


        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-top border-gray">
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center text-muted">
              <FaGripVertical className="fs-5 me-2" />
              <FaFileAlt className="fs-5" />
            </div>
            <a
              className="wd-assignment-link flex-grow-1"
              href="#/Kambaz/Courses/1234/Assignments/124"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="wd-title p-3 ps-2 bg-white d-flex flex-column">
                <div className="fw-bold">A2 - Some Other Title</div>
                <div className="text-danger">Multiple Modules</div>
                <div className="text-muted">
                  <strong>Not available until</strong> May 13 at 12:00am |{" "}
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
            </a>
            <div className="ms-auto p-3">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>


        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-top border-gray">
          <div className="d-flex align-items-center">
            <div className="me-3 d-flex align-items-center text-muted">
              <FaGripVertical className="fs-5 me-2" />
              <FaFileAlt className="fs-5" />
            </div>
            <a
              className="wd-assignment-link flex-grow-1"
              href="#/Kambaz/Courses/1234/Assignments/125"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="wd-title p-3 ps-2 bg-white d-flex flex-column">
                <div className="fw-bold">A3 - Yet Another Title</div>
                <div className="text-danger">Multiple Modules</div>
                <div className="text-muted">
                  <strong>Not available until</strong> May 20 at 12:00am |{" "}
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
            </a>
            <div className="ms-auto p-3">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

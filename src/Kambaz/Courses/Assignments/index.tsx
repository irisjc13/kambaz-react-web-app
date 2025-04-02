/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { findAssignmentsForCourse} from "./client";
import { setAssignments, deleteAssignment } from "./reducer";
import AssignmentControls from "./AssignmentsControls";
import AssignmentsBannerButtons from "./AssignmentsBannerButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courseAssignments = assignments.filter((a: any) => a.course === cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showModal, setShowModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  const fetchAssignments = async () => {
    if (!cid) return;
    const data = await findAssignmentsForCourse(cid);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    fetchAssignments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  const handleDeleteClick = (assignmentId: string) => {
    setSelectedAssignment(assignmentId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment));
    }
    setShowModal(false);
  };

  return (
    <div id="wd-assignments" className="p-3">
      {currentUser?.role === "FACULTY" && <AssignmentControls />}
      <br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        {/* Banner */}
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments{" "}
            <AssignmentsBannerButtons />
          </div>
          {/* Assignment List */}
          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-assignment-item list-group-item p-3 mb-3 fs-5"
                style={{
                  border: "1px solid #ccc",
                  borderLeft: "5px solid green",
                  borderRadius: "0",
                }}
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaFileAlt className="me-2 fs-3" />
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <span className="fw-bold">{assignment.title}</span>
                  </Link>
                  <div className="ms-auto d-flex align-items-center">
                    <span className="me-2">
                    
                    </span>
                    <AssignmentsControlButtons />
                    {currentUser?.role === "FACULTY" && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(assignment._id)}
                        className="ms-3"
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="text-muted small mt-2">
                  <b>Not Available</b> until {assignment.availableDate || "TBD"} |{" "}
                  <b>Due</b> {assignment.dueDate || "TBD"} | {assignment.points ?? 100} points
                </div>
              </ListGroup.Item>
            ))}
          </ul>
        </li>
      </ul>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

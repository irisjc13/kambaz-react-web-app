/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { FaSearch, FaPlus, FaTrash, FaGripVertical, FaFileAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [showModal, setShowModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

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
      <div className="d-flex align-items-center mb-4">
        <div className="flex-grow-1 me-3">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control id="wd-search-assignment" placeholder="Search for Assignments" />
          </InputGroup>
        </div>

        <Button id="wd-add-assignment" variant="danger" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
          <FaPlus className="me-1" />
          Assignment
        </Button>
      </div>

      <ListGroup id="wd-assignment-list">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroup.Item key={assignment._id} className="wd-assignment-list-item p-0 mb-5 fs-5 border-top border-gray">
              <div className="d-flex align-items-center">
                <div className="me-3 d-flex align-items-center text-muted">
                  <FaGripVertical className="fs-5 me-2" />
                  <FaFileAlt className="fs-5" />
                </div>
                <div className="wd-title p-3 ps-2 bg-white d-flex flex-column flex-grow-1">
                  <div className="fw-bold" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)}>
                    {assignment.title}
                  </div>
                  <div className="text-muted">
                    <strong>Due:</strong> {assignment.dueDate || "TBD"} | <strong>Points:</strong> {assignment.points ?? 100}
                  </div>
                </div>
                <div className="ms-auto p-3">
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(assignment._id)}>
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
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

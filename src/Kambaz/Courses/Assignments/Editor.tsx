/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  // Find existing assignment
  const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);

  const [assignment, setAssignment] = useState({
    _id: existingAssignment?._id ?? `A-${cid}-${uuidv4()}`,
    title: existingAssignment?.title ?? "",
    course: cid,
    description: existingAssignment?.description ?? "",
    points: existingAssignment?.points ?? 100,
    dueDate: existingAssignment?.dueDate ?? "",
    availableFrom: existingAssignment?.availableFrom ?? "",
    availableUntil: existingAssignment?.availableUntil ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAssignment({ ...assignment, [e.target.id]: e.target.value });
  };

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" value={assignment.title} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} value={assignment.description} onChange={handleChange} />
        </Form.Group>

        <Card className="p-3 mb-3">
          <Card.Title>Assign</Card.Title>
          <Form.Group className="mb-3" controlId="dueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="datetime-local" value={assignment.dueDate} onChange={handleChange} />
          </Form.Group>
        </Card>

        <div className="d-flex justify-content-end gap-3">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

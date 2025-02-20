/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import * as db from "../../Database";

export default function AssignmentEditor() {
  // Retrieve the course and assignment IDs from the URL
  const { cid, aid } = useParams();

  const assignment = db.assignments.find(
    (a: any) => a._id === aid && a.course === cid
  ) as any;

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. A1 - ENV + HTML"
            defaultValue={assignment.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue={
              assignment.description ?? "The assignment is available online. Submit a link to the landing page..."
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-points">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            defaultValue={assignment.points ?? 100}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-assignment-group">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-display-grade">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
          </Form.Select>

          <div className="mt-2 ms-3">
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        <Card className="p-3 mb-3">
          <Card.Title>Assign</Card.Title>
          <Form.Group className="mb-3" controlId="wd-assign-to">
            <Form.Label>Assign to</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <div className="d-flex gap-4">
            <Form.Group className="mb-3" controlId="wd-due-date">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.dueDate ?? "2024-05-13T23:59"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available-from">
              <Form.Label>Available from</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.availableFrom ?? "2024-05-06T00:00"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={assignment.availableUntil ?? "2024-05-20T23:59"}
              />
            </Form.Group>
          </div>
        </Card>

        <div className="d-flex justify-content-end gap-3">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" id="wd-cancel">
              Cancel
            </Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger" id="wd-save">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

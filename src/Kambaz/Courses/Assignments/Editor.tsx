import { Form, Button, Card } from "react-bootstrap";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>

        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            defaultValue="A1 - ENV + HTML"
            type="text"
            placeholder="e.g. A1 - ENV + HTML"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue="The assignment is available online. Submit a link to the landing page..."
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="wd-points">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
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
              <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available-from">
              <Form.Label>Available from</Form.Label>
              <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control type="datetime-local" defaultValue="2024-05-20T23:59" />
            </Form.Group>
          </div>
        </Card>

        <div className="d-flex justify-content-end gap-3">
          <Button variant="secondary" id="wd-cancel">
            Cancel
          </Button>
          <Button variant="danger" id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
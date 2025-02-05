import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      <Form.Group className="mb-2" controlId="wd-username">
        <Form.Control
          defaultValue="alice"
          placeholder="username"
          type="text"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-password">
        <Form.Control
          defaultValue="123"
          placeholder="password"
          type="password"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-firstname">
        <Form.Control
          defaultValue="Alice"
          placeholder="First Name"
          type="text"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-lastname">
        <Form.Control
          defaultValue="Wonderland"
          placeholder="Last Name"
          type="text"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-dob">
        <Form.Control
          defaultValue="2000-01-01"
          type="date"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-email">
        <Form.Control
          defaultValue="alice@wonderland"
          type="email"
          placeholder="email"
        />
      </Form.Group>


      <Form.Group className="mb-2" controlId="wd-role">
        <Form.Select defaultValue="FACULTY">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
      </Form.Group>


      <Link
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}
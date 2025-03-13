/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <Form.Group className="mb-2" controlId="wd-username">
            <Form.Control
              value={profile.username}
              placeholder="Username"
              type="text"
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-password">
            <Form.Control
              value={profile.password}
              placeholder="Password"
              type="password"
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-firstname">
            <Form.Control
              value={profile.firstName}
              placeholder="First Name"
              type="text"
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-lastname">
            <Form.Control
              value={profile.lastName}
              placeholder="Last Name"
              type="text"
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-dob">
            <Form.Control
              value={profile.dob}
              type="date"
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-email">
            <Form.Control
              value={profile.email}
              placeholder="Email"
              type="email"
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="wd-role">
            <Form.Select
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Form.Group>

          <Button onClick={signout} className="w-100 mb-2" variant="danger" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
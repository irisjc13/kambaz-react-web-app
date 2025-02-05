import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";

export default function Account() {
  return (
    <div
      id="wd-account-screen"
      style={{
        display: "flex", //horizontal
        padding: "1rem", //padding
      }}
    >

      <div style={{ marginRight: "2rem" }}>
        <AccountNavigation />
      </div>


      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

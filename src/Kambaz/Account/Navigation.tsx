import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" style={{ paddingLeft: "0.5rem" }}>

      <Link
        to="/Kambaz/Account/Signin"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.25rem",
          textDecoration: "none",
          borderLeft: "3px solid black",
          color: "black",
          paddingLeft: "0.5rem",
        }}
      >
        Signin
      </Link>


      <Link
        to="/Kambaz/Account/Signup"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.25rem",
          textDecoration: "none",
          color: "red",
          paddingLeft: "0.5rem",
        }}
      >
        Signup
      </Link>

 
      <Link
        to="/Kambaz/Account/Profile"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.25rem",
          textDecoration: "none",
          color: "red",
          paddingLeft: "0.5rem",
        }}
      >
        Profile
      </Link>
    </div>
  );
}
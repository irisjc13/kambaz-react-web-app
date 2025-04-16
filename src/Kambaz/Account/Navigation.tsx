/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  function active(path: string) {
    return pathname.includes(path) ? "active" : "";
  }

return (
    <div id="wd-account-navigation" style={{ paddingLeft: "0.5rem" }}>
      {links.map((link) => {
        const isActive = pathname.includes(link);

        return (
          <Link
            key={link}
            to={`/Kambaz/Account/${link}`}
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "1.25rem",
              textDecoration: "none",
              color: isActive ? "blue" : link === "Profile" ? "red" : "black", 
              borderLeft: isActive ? "3px solid blue" : "none", 
              paddingLeft: "0.5rem",
            }}
          >
            {link}
          </Link>
          
        );
      })}

      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );}
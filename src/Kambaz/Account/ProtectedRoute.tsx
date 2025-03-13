/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  // Check if the user is enrolled in the course
  const isEnrolled = enrollments.some(
    (enrollment: any) => enrollment.user === currentUser?._id && enrollment.course === cid
  );

  // If the user is not logged in, redirect to the sign-in page
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // If the course ID exists and the user is NOT enrolled, redirect to Dashboard
  if (cid && !isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return children;
}

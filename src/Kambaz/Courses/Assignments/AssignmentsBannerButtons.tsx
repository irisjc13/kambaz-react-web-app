import { FaEllipsisV, FaPlus } from "react-icons/fa";
export default function AssignmentsBannerButtons() {
  return (
    <div className="float-end">
      <span className="me-2">40% of Total</span>
      <FaPlus className="fs-4 me-2" />
      <FaEllipsisV className="fs-4" />
    </div>
  );
}

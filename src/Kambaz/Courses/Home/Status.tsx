import { Button } from "react-bootstrap";
import { BiImport, BiHome } from "react-icons/bi";
import { FaCheckCircle, FaStream, FaBullhorn, FaChartLine, FaBell } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap"
            id="wd-unpublish-btn"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button
            variant="success"
            size="lg"
            className="w-100"
            id="wd-publish-btn"
          >
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </Button>
        </div>
      </div>

      <br />

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-existing-content-btn"
      >
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-import-from-commons-btn"
      >
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-choose-home-page-btn"
      >
        <BiHome className="me-2 fs-5" />
        Choose Home Page
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-course-stream-btn"
      >
        <FaStream className="me-2 fs-5" />
        View Course Stream
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-new-announcement-btn"
      >
        <FaBullhorn className="me-2 fs-5" />
        New Announcement
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-new-analytics-btn"
      >
        <FaChartLine className="me-2 fs-5" />
        New Analytics
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start"
        id="wd-view-course-notifications-btn"
      >
        <FaBell className="me-2 fs-5" />
        View Course Notifications
      </Button>
    </div>
  );
}


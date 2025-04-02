/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Card, Row, Col, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { enrollUser } from "../Enrollments/client";  // Adjust the path as needed
import { enroll } from "../Enrollments/reducer";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: (course: any) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: any) => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);

  const handleAddCourse = () => {
    addNewCourse(course);
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      department: "",
      credits: 0,
      description: "",
    });
  };

  const handleUpdateCourse = () => {
    updateCourse(course);
  };

  const handleEnroll = async (course: any) => {
    // Enroll the current user in the selected course
    const newEnrollment = await enrollUser({ user: currentUser._id, course: course._id });
    dispatch(enroll(newEnrollment));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={handleAddCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={handleUpdateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => {
            // Check if the current user is enrolled in this course.
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id && enrollment.course === course._id
            );

            return (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src="/images/chem.jpg"
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>
                      {currentUser?.role !== "FACULTY" && (
                        <>
                          {isEnrolled ? (
                            <Button variant="primary">Go</Button>
                          ) : (
                            <Button variant="success" onClick={() => handleEnroll(course)}>
                              Enroll
                            </Button>
                          )}
                        </>
                      )}
                      {currentUser?.role === "FACULTY" && (
                        <>
                          <Button variant="primary">Go</Button>
                          <Button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
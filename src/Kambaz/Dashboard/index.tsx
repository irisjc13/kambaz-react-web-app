/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { addCourse} from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer";
import { useState } from "react";
import { FaPlus, FaUserCheck, FaUserMinus } from "react-icons/fa";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image: string;
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);

  // Get the courses the user is enrolled in
  const userEnrollments = enrollments.filter((e: any) => e.user === currentUser?._id);
  const enrolledCourseIds = new Set(userEnrollments.map((e: any) => e.course));

  // Toggle between showing all courses and only enrolled courses
  const toggleEnrollments = () => {
    setShowAllCourses(!showAllCourses);
  };

  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "New Course",
    number: "0000",
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    department: "General",
    credits: 3,
    description: "No description provided",
    image: "/images/default.jpg",
  });

  const handleAddCourse = () => {
    dispatch(addCourse(course));
    setCourse({
      _id: "",
      name: "New Course",
      number: "0000",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "General",
      credits: 3,
      description: "No description provided",
      image: "/images/default.jpg",
    });
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      <Button className="btn btn-primary float-end mb-3" onClick={toggleEnrollments}>
        {showAllCourses ? "Show My Courses" : "Show All Courses"}
      </Button>

      <hr />
      <h5>
        New Course
        <Button className="btn btn-primary float-end" onClick={handleAddCourse}>
          <FaPlus /> Add
        </Button>
      </h5>
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : `My Courses (${userEnrollments.length})`}
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course: Course) => showAllCourses || enrolledCourseIds.has(course._id))
            .map((course: Course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img src={course.image} variant="top" width="100%" height={160} />
                    <Card.Body>
                      <Card.Title className="text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                        {course.description}
                      </Card.Text>
                      <Button variant="primary">Go</Button>

                      {/* Enroll / Unenroll Buttons */}
                      {enrolledCourseIds.has(course._id) ? (
                        <Button
                          variant="danger"
                          className="float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(unenroll({ user: currentUser._id, course: course._id }));
                          }}
                        >
                          <FaUserMinus /> Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          className="float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              enroll({ _id: Date.now().toString(), user: currentUser._id, course: course._id })
                            );
                          }}
                        >
                          <FaUserCheck /> Enroll
                        </Button>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
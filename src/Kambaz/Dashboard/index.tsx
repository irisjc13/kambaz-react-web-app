import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/english.jpg" width={200} />
            <div>
              <h5> ENGL1111 English </h5>
              <p className="wd-dashboard-course-title">
                English Essay Writers </p>
              <button> Go </button>
            </div>
          </Link> </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/data.jpg" width={200} />
            <div>
              <h5> DS2121 Data Science</h5>
              <p className="wd-dashboard-course-title">
                Intro to Data Science </p>
              <button> Go </button>
            </div>
          </Link>
          </div>
        <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/story.jpg" width={200} />
            <div>
              <h5> COMM1234 Storytelling </h5>
              <p className="wd-dashboard-course-title">
                Intro to Stories </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/web.jpg" width={200} />
            <div>
              <h5> CS4550 Web Dev </h5>
              <p className="wd-dashboard-course-title">
                Intro to Web Development </p>
              <button> Go </button>
            </div>
          </Link>
           </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/math.jpg" width={200} />
            <div>
              <h5> Math1234 Calculus I </h5>
              <p className="wd-dashboard-course-title">
                Intro to Calculus </p>
              <button> Go </button>
            </div>
          </Link>
          </div>
        <div className="wd-dashboard-course"> 
        <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/chem.jpg" width={200} />
            <div>
              <h5> CHEM1111 Chemistry </h5>
              <p className="wd-dashboard-course-title">
                Intro to Chemistry </p>
              <button> Go </button>
            </div>
          </Link>
          </div>
      </div>
    </div>
);}

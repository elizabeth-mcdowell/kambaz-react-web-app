import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/blue.jpg" width={200} />
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
            <img src="/images/classes/books.jpg" width={200} />
            <div>
              <h5> English 2011 </h5>
              <p className="wd-dashboard-course-title">
                Advanced Writing in Technical Professions  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/math.jpg" width={200} />
            <div>
              <h5> CS1800 </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/beaker.jpg" width={200} />
            <div>
              <h5> BIO4203 </h5>
              <p className="wd-dashboard-course-title">
                Orgo </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/feminism.jpg" width={200} />
            <div>
              <h5> PHIL3500 </h5>
              <p className="wd-dashboard-course-title">
              Sexuality gender and the law  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/buildings.jpg" width={200} />
            <div>
              <h5> Arch3005 </h5>
              <p className="wd-dashboard-course-title">
                Advanced Architecture  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/classes/blue.jpg" width={200} />
            <div>
              <h5> THTR1300 </h5>
              <p className="wd-dashboard-course-title">
                Improvisation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
);}


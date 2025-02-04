import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

      <Row xs={1} md={5} className="g-4">
        
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/blue.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
                Full Stack software developer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/books.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">ENGW2011 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Advanced Writing  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/math.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS1800  </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Discrete Structures  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

    
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/beaker.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">  BIO4203 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Orgo  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/feminism.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">PHIL3500 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Sexuality, Gender and the Law  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/buildings.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">  ARCH3005 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Advanced Architecture  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/theater.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> THTR1300 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Intro to Acting  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/art.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ART1101 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Intro to Art  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/music.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> MUSC1011 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Music Theory </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/business.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> BUS1101 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
               Business 101</Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/cs.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS1200 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Intro to CS  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }} >
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/classes/theater.jpg"  width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> THTR1300 </Card.Title>
              <Card.Text className="wd-dashboard-course-text">
              Improvisation </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>


      </Row>
      </div>
    </div>
);}


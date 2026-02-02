import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { resumeData } from "../data/resumeData";

function Hero() {
  const { personal } = resumeData;

  const roles = [
    "Virtual Assistant",
    "Customer Support Specialist",
    "Graphic Designer",
    "Video Editor",
    "English Teacher",
  ];

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <div className="hero-profile-photo mb-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="profile-placeholder">
                <i className="bi bi-person-fill"></i>
              </div>
            </div>
            <p
              className="text-uppercase letter-spacing mb-3 text-primary"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Welcome to my portfolio
            </p>
            <h1
              className="display-3 fw-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {personal.name}
            </h1>
            <h2
              className="h4 text-muted mb-4 typewriter-container"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 80,
                  pauseFor: 2000,
                }}
              />
            </h2>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="500">
              {resumeData.summary}
            </p>
            <div
              className="d-flex gap-3 justify-content-center flex-wrap"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Button variant="primary" size="lg" href="#contact">
                <i className="bi bi-envelope me-2"></i>
                Get in Touch
              </Button>
              <Button variant="outline-primary" size="lg" href="#experience">
                <i className="bi bi-briefcase me-2"></i>
                View Experience
              </Button>
              <Button
                variant="outline-secondary"
                size="lg"
                href="/resume.pdf"
                download="Jenalyn_Juntilla_Resume.pdf"
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="800">
        <a href="#about">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;

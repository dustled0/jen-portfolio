import { Container, Row, Col, Button } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Hero() {
  const { personal } = resumeData;

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <p className="text-uppercase letter-spacing mb-3 text-primary">
              Welcome to my portfolio
            </p>
            <h1 className="display-3 fw-bold mb-4">{personal.name}</h1>
            <h2 className="h4 text-muted mb-4">{personal.title}</h2>
            <p className="lead mb-5">{resumeData.summary}</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button variant="primary" size="lg" href="#contact">
                <i className="bi bi-envelope me-2"></i>
                Get in Touch
              </Button>
              <Button variant="outline-primary" size="lg" href="#experience">
                <i className="bi bi-briefcase me-2"></i>
                View Experience
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-scroll-indicator">
        <a href="#about">
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;

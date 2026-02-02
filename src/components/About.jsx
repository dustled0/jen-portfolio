import { Container, Row, Col, Card } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function About() {
  const { personal, education, languages } = resumeData;

  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              About Me
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={6} data-aos="fade-right" data-aos-delay="200">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h5 mb-4">
                  <i className="bi bi-person-badge text-primary me-2"></i>
                  Personal Information
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Location:</strong>
                    <span className="ms-2">{personal.location}</span>
                  </li>
                  <li className="mb-3">
                    <strong>Email:</strong>
                    <a href={`mailto:${personal.email}`} className="ms-2">
                      {personal.email}
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Phone:</strong>
                    <a href={`tel:${personal.phone}`} className="ms-2">
                      {personal.phone}
                    </a>
                  </li>
                  <li className="mb-3">
                    <strong>Languages:</strong>
                    <span className="ms-2">
                      {languages.map((l) => `${l.name} (${l.level})`).join(", ")}
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-delay="300">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="h5 mb-4">
                  <i className="bi bi-mortarboard text-primary me-2"></i>
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="h6 mb-1">{edu.degree}</h4>
                    <p className="text-primary mb-1">{edu.school}</p>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-geo-alt me-1"></i>
                      {edu.location}
                    </p>
                    <p className="text-muted small">
                      <i className="bi bi-calendar me-1"></i>
                      {edu.period}
                    </p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

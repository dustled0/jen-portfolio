import { Container, Row, Col, Card } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-divider"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                        <div>
                          <h3 className="h5 mb-1">{exp.title}</h3>
                          <p className="text-primary mb-0">{exp.company}</p>
                        </div>
                        <div className="text-end">
                          <span className="badge bg-primary-subtle text-primary mb-2">
                            {exp.period}
                          </span>
                          <p className="text-muted small mb-0">
                            <i className="bi bi-geo-alt me-1"></i>
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="mb-0">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="mb-2">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;

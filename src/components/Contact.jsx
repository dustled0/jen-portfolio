import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Contact() {
  const { personal } = resumeData;

  return (
    <section id="contact" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="text-muted">
              I&apos;m always open to discussing new opportunities and projects
            </p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="contact-icon mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h3 className="h5 mb-3">Email</h3>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-decoration-none"
                >
                  {personal.email}
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="contact-icon mb-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <h3 className="h5 mb-3">Phone</h3>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-decoration-none"
                >
                  {personal.phone}
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-sm text-center h-100">
              <Card.Body className="p-4">
                <div className="contact-icon mb-3">
                  <i className="bi bi-linkedin"></i>
                </div>
                <h3 className="h5 mb-3">LinkedIn</h3>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  View Profile
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${personal.email}`}
            >
              <i className="bi bi-send me-2"></i>
              Send Me a Message
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

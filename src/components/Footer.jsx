import { Container, Row, Col } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Footer() {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className="text-center text-md-start mb-3 mb-md-0"
            data-aos="fade-right"
          >
            <p className="mb-0">
              &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end" data-aos="fade-left">
            <div className="social-links">
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="me-3"
              >
                <i className="bi bi-envelope"></i>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="me-3"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={`tel:${personal.phone}`}
                aria-label="Phone"
              >
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

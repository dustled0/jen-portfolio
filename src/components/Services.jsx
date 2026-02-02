import { Container, Row, Col, Card } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Services() {
  const { services } = resumeData;

  return (
    <section id="services" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Services I Offer</h2>
            <div className="section-divider"></div>
            <p className="text-muted">
              Professional services tailored to meet your business needs
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 border-0 shadow-sm service-card text-center">
                <Card.Body className="p-4">
                  <div className="service-icon mb-4">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h3 className="h5 mb-3">{service.title}</h3>
                  <p className="text-muted mb-0">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;

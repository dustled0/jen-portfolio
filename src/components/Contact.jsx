import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Contact() {
  const { personal } = resumeData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setStatus({
        type: "danger",
        message: "Oops! Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              Get In Touch
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              I&apos;m always open to discussing new opportunities and projects
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Info Cards */}
          <Col lg={4}>
            <Row className="g-4">
              <Col xs={12} data-aos="fade-up" data-aos-delay="200">
                <Card className="border-0 shadow-sm text-center h-100 contact-info-card">
                  <Card.Body className="p-4">
                    <div className="contact-icon mb-3">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <h3 className="h6 mb-2">Email</h3>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-decoration-none small"
                    >
                      {personal.email}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} data-aos="fade-up" data-aos-delay="300">
                <Card className="border-0 shadow-sm text-center h-100 contact-info-card">
                  <Card.Body className="p-4">
                    <div className="contact-icon mb-3">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <h3 className="h6 mb-2">Phone</h3>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-decoration-none small"
                    >
                      {personal.phone}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} data-aos="fade-up" data-aos-delay="400">
                <Card className="border-0 shadow-sm text-center h-100 contact-info-card">
                  <Card.Body className="p-4">
                    <div className="contact-icon mb-3">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <h3 className="h6 mb-2">LinkedIn</h3>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none small"
                    >
                      View Profile
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Contact Form */}
          <Col lg={8} data-aos="fade-up" data-aos-delay="300">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="h5 mb-4">Send Me a Message</h3>

                {status.message && (
                  <Alert variant={status.type} className="mb-4">
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can I help you?"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Your message here..."
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Send Message
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

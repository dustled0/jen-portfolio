import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Testimonials() {
  const { testimonials } = resumeData;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`bi ${index < rating ? "bi-star-fill" : "bi-star"} text-warning`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              What Clients Say
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              Feedback from people I&apos;ve had the pleasure to work with
            </p>
          </Col>
        </Row>

        {/* Desktop View - All Cards */}
        <Row className="g-4 d-none d-lg-flex">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={testimonial.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="testimonial-quote">
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className="testimonial-content mb-4">{testimonial.content}</p>
                  <div className="testimonial-rating mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="h6 mb-0">{testimonial.name}</h4>
                      <p className="text-muted small mb-0">{testimonial.role}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Mobile View - Carousel */}
        <div className="d-lg-none" data-aos="fade-up" data-aos-delay="200">
          <Card className="testimonial-card border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="testimonial-quote">
                <i className="bi bi-quote"></i>
              </div>
              <p className="testimonial-content mb-4">
                {testimonials[activeIndex].content}
              </p>
              <div className="testimonial-rating mb-3">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="h6 mb-0">{testimonials[activeIndex].name}</h4>
                  <p className="text-muted small mb-0">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          <div className="testimonial-nav mt-4">
            <button
              className="nav-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              className="nav-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;

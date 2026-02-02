import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Portfolio() {
  const { portfolio } = resumeData;
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...new Set(portfolio.map((item) => item.category))];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              My Portfolio
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              A showcase of my recent work and projects
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="portfolio-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {filteredPortfolio.map((item, index) => (
            <Col
              md={6}
              lg={4}
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <Card className="portfolio-card h-100 border-0 shadow-sm">
                <div
                  className="portfolio-image"
                  style={{ "--portfolio-color": item.color }}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <h3 className="h5 mb-2">{item.title}</h3>
                  <p className="text-muted mb-0 small">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;

import { useState } from "react";
import { Container, Row, Col, Card, Collapse, Badge } from "react-bootstrap";

const experienceData = [
  {
    id: 1,
    title: "BPO Industry - Non-Voice Casino Account (Email & Chat Support)",
    company: "BPO Industry",
    location: "Paranaque, Manila",
    period: "2024 - 2025",
    icon: "bi-headset",
    color: "#0d6efd",
    description: "Provided professional customer support through email and chat channels for a casino account, handling inquiries and resolving issues efficiently.",
    responsibilities: [
      "Ensured timely and accurate responses to customer inquiries",
      "Provided customer support through chat-based communication, addressing inquiries and resolving concerns efficiently",
      "Handled payroll-related inquiries, including verification and resolution of payment discrepancies",
      "Processed refunds and cancellation requests in compliance with company policies",
      "Maintained accurate documentation and records of customer interactions and transactions",
      "Coordinated with internal teams to resolve complex customer issues",
      "Ensured confidentiality and data accuracy when handling sensitive customer information",
    ],
    skills: ["Email Support", "Chat Support", "CRM", "Problem Solving", "Documentation"],
    achievements: ["Maintained 95% customer satisfaction rating", "Reduced response time by 30%"]
  },
  {
    id: 2,
    title: "Freelance",
    company: "Self-employed",
    location: "Remote",
    period: "2023 - 2024",
    icon: "bi-palette",
    color: "#6f42c1",
    description: "Worked as a freelance creative professional, delivering graphic design and video editing services to various clients.",
    responsibilities: [
      "Created and edited videos for online content and social media platforms",
      "Designed graphics using Canva for branding and marketing purposes",
      "Delivered creative assets aligned with client requirements and deadlines",
      "Collaborated with clients to improve visual content and engagement",
    ],
    skills: ["Canva", "Video Editing", "Graphic Design", "Client Communication"],
    achievements: ["Completed 50+ projects", "Built repeat client base"]
  },
  {
    id: 3,
    title: "English Online Teacher",
    company: "Preply",
    location: "Remote",
    period: "2021 - 2022",
    icon: "bi-mortarboard",
    color: "#198754",
    description: "Taught English language skills to international students through an online teaching platform.",
    responsibilities: [
      "Conducted one-on-one and group English lessons for international students",
      "Improved students' communication and conversational skills",
      "Demonstrated strong verbal and written English communication",
      "Built positive client relationships and maintained lesson schedules",
    ],
    skills: ["Teaching", "Communication", "Lesson Planning", "Student Assessment"],
    achievements: ["4.8/5 average student rating", "100+ lessons completed"]
  },
];

function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              Work Experience
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              Click on each role to see more details
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline-interactive">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item-interactive ${expandedId === exp.id ? "expanded" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={150 * (index + 1)}
                >
                  <div
                    className="timeline-marker"
                    style={{ "--marker-color": exp.color }}
                  >
                    <i className={`bi ${exp.icon}`}></i>
                  </div>

                  <Card
                    className={`timeline-card border-0 shadow-sm ${expandedId === exp.id ? "active" : ""}`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <Card.Body className="p-4">
                      <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                        <div className="flex-grow-1">
                          <h3 className="h5 mb-1 timeline-title">{exp.title}</h3>
                          <p className="text-primary mb-0 fw-medium">{exp.company}</p>
                        </div>
                        <div className="text-end ms-3">
                          <span
                            className="badge timeline-badge mb-2"
                            style={{ backgroundColor: exp.color }}
                          >
                            {exp.period}
                          </span>
                          <p className="text-muted small mb-0">
                            <i className="bi bi-geo-alt me-1"></i>
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted mb-3 timeline-description">
                        {exp.description}
                      </p>

                      <div className="expand-indicator">
                        <i className={`bi ${expandedId === exp.id ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                        <span className="ms-2 small">
                          {expandedId === exp.id ? "Show less" : "Show more"}
                        </span>
                      </div>

                      <Collapse in={expandedId === exp.id}>
                        <div className="timeline-details mt-4">
                          <div className="mb-4">
                            <h6 className="fw-bold mb-3">
                              <i className="bi bi-list-check me-2 text-primary"></i>
                              Key Responsibilities
                            </h6>
                            <ul className="responsibilities-list">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex}>
                                  <i className="bi bi-check2 text-success me-2"></i>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h6 className="fw-bold mb-3">
                              <i className="bi bi-tools me-2 text-primary"></i>
                              Skills Used
                            </h6>
                            <div className="d-flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  bg="light"
                                  text="dark"
                                  className="skill-tag"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h6 className="fw-bold mb-3">
                              <i className="bi bi-trophy me-2 text-primary"></i>
                              Key Achievements
                            </h6>
                            <div className="achievements-list">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="achievement-item">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Collapse>
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

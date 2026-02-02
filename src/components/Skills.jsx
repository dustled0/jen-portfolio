import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skillsWithLevels = [
  { name: "Customer Service", level: 95, icon: "bi-headset" },
  { name: "Email & Chat Support", level: 90, icon: "bi-chat-dots" },
  { name: "Client Coordination", level: 88, icon: "bi-people" },
  { name: "Graphic Design (Canva)", level: 85, icon: "bi-palette" },
  { name: "Video Editing", level: 80, icon: "bi-camera-video" },
  { name: "CRM Platforms", level: 75, icon: "bi-kanban" },
  { name: "File Organization", level: 90, icon: "bi-folder2-open" },
  { name: "Time Management", level: 92, icon: "bi-clock" },
  { name: "Team Leadership", level: 85, icon: "bi-person-badge" },
];

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              Skills & Expertise
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              Proficiency levels based on experience and project work
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <Row className="g-4">
              {skillsWithLevels.map((skill, index) => (
                <Col
                  md={6}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={50 * (index + 1)}
                >
                  <div className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <i className={`bi ${skill.icon} me-2`}></i>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <ProgressBar
                      now={isVisible ? skill.level : 0}
                      className="skill-progress"
                      style={{
                        "--progress-width": `${skill.level}%`,
                        transition: "width 1.5s ease-out"
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;

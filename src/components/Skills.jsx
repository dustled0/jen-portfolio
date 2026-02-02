import { Container, Row, Col, Badge } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="section-padding">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              Skills & Expertise
            </h2>
            <div className="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="skills-container text-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  bg="light"
                  text="dark"
                  className="skill-badge m-2 p-3 fs-6"
                  data-aos="flip-up"
                  data-aos-delay={50 * (index + 1)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;

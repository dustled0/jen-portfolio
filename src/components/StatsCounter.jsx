import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: "bi-calendar-check",
    value: 2,
    suffix: "+",
    label: "Years of Experience",
  },
  // {
  //   id: 2,
  //   icon: "bi-folder-check",
  //   value: 50,
  //   suffix: "+",
  //   label: "Projects Completed",
  // },
  {
    id: 3,
    icon: "bi-emoji-smile",
    value: 20,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: 4,
    icon: "bi-award",
    value: 9,
    suffix: "",
    label: "Skills Mastered",
  },
];

function StatsCounter() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <Container>
        <Row className="g-4 justify-content-center">
          {stats.map((stat, index) => (
            <Col
              xs={6}
              lg={3}
              key={stat.id}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="stat-card text-center">
                <div className="stat-icon">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div className="stat-value">
                  {isVisible ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsCounter;

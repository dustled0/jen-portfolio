import { Container, Row, Col } from "react-bootstrap";
import { resumeData } from "../data/resumeData";

function Footer() {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();
  const basePath = import.meta.env.BASE_URL;

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Email", href: `mailto:${personal.email}`, icon: "bi-envelope-fill" },
    { name: "LinkedIn", href: personal.linkedin, icon: "bi-linkedin", external: true },
    { name: "Phone", href: `tel:${personal.phone}`, icon: "bi-telephone-fill" },
  ];

  return (
    <footer className="footer-section">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main py-5">
          {/* Brand & Bio */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand" data-aos="fade-up">
              <h3 className="footer-logo">{personal.name}</h3>
              <p className="footer-tagline">
                Virtual Assistant & Customer Support Specialist
              </p>
              <p className="footer-bio">
                Detail-oriented professional with 2+ years of experience in customer support,
                creative services, and virtual assistance.
              </p>
              <a
                href={`${basePath}resume.pdf`}
                download="Jenalyn_Juntilla_Resume.pdf"
                className="btn btn-outline-light btn-sm mt-2"
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-nav">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
              <h5 className="footer-title">Contact Info</h5>
              <ul className="contact-list">
                <li>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>{personal.location}</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                </li>
              </ul>
            </div>
          </Col>

          {/* CTA & Social */}
          <Col lg={3} md={6}>
            <div className="footer-cta" data-aos="fade-up" data-aos-delay="300">
              <h5 className="footer-title">Let's Work Together</h5>
              <p className="cta-text">
                Have a project in mind? I'd love to hear from you.
              </p>
              <a href="#contact" className="btn btn-primary btn-sm mb-4">
                <i className="bi bi-send me-2"></i>
                Get In Touch
              </a>

              <div className="footer-social">
                <span className="social-label">Follow Me</span>
                <div className="social-icons">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      aria-label={link.name}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      <i className={`bi ${link.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom py-3">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0 footer-credit">
              <span className="availability-dot"></span>
              Available for Freelance Work
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

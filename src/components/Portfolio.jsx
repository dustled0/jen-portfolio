import { useState } from "react";
import { Container, Row, Col, Card, Modal, Badge } from "react-bootstrap";

const portfolioData = [
  {
    id: 1,
    title: "Social Media Graphics",
    category: "Graphic Design",
    description: "Eye-catching social media posts and stories designed in Canva for brand engagement.",
    fullDescription: "Created a comprehensive social media content package including Instagram posts, stories, Facebook covers, and promotional banners. Focused on consistent branding, engaging visuals, and platform-optimized dimensions.",
    icon: "bi-instagram",
    color: "#E1306C",
    tools: ["Canva", "Adobe Express", "Instagram"],
    highlights: [
      "50+ social media graphics created",
      "Increased engagement by 40%",
      "Consistent brand identity across platforms",
      "Quick turnaround time"
    ]
  },
  {
    id: 2,
    title: "Brand Identity Package",
    category: "Graphic Design",
    description: "Complete branding materials including logos, color palettes, and marketing collateral.",
    fullDescription: "Developed complete brand identity packages for small businesses, including logo design, color palette selection, typography guidelines, and marketing materials such as business cards and letterheads.",
    icon: "bi-brush",
    color: "#6f42c1",
    tools: ["Canva", "Coolors", "Google Fonts"],
    highlights: [
      "Full brand guidelines document",
      "Logo variations for different uses",
      "Marketing collateral templates",
      "Social media kit included"
    ]
  },
  {
    id: 3,
    title: "Promotional Video",
    category: "Video Editing",
    description: "Engaging promotional video content for social media marketing campaigns.",
    fullDescription: "Produced short-form promotional videos optimized for social media platforms. Included motion graphics, text overlays, background music, and call-to-action elements to drive engagement and conversions.",
    icon: "bi-play-circle",
    color: "#dc3545",
    tools: ["CapCut", "Canva Video", "InShot"],
    highlights: [
      "15-60 second optimized content",
      "Platform-specific formatting",
      "Engaging transitions and effects",
      "Royalty-free music integration"
    ]
  },
  {
    id: 4,
    title: "YouTube Content",
    category: "Video Editing",
    description: "Professional video editing for YouTube channels including intros, transitions, and effects.",
    fullDescription: "Edited long-form YouTube content including tutorials, vlogs, and educational videos. Added professional intros/outros, lower thirds, transitions, color correction, and audio enhancement.",
    icon: "bi-youtube",
    color: "#FF0000",
    tools: ["CapCut", "DaVinci Resolve", "Canva"],
    highlights: [
      "Custom intro/outro animations",
      "Professional color grading",
      "Audio enhancement and cleanup",
      "Thumbnail design included"
    ]
  },
  {
    id: 5,
    title: "Email Templates",
    category: "Virtual Assistance",
    description: "Professional email templates and response systems for customer support operations.",
    fullDescription: "Designed and organized professional email template libraries for customer support teams. Created categorized response templates for common inquiries, complaints, and follow-ups to improve response time and consistency.",
    icon: "bi-envelope-paper",
    color: "#0d6efd",
    tools: ["Google Docs", "Notion", "Gmail"],
    highlights: [
      "100+ email templates created",
      "Categorized by inquiry type",
      "Reduced response time by 50%",
      "Easy customization guides"
    ]
  },
  {
    id: 6,
    title: "Documentation System",
    category: "Virtual Assistance",
    description: "Organized file management and documentation systems for efficient workflow.",
    fullDescription: "Implemented comprehensive documentation and file management systems using cloud-based tools. Created SOPs, organized shared drives, and established naming conventions for easy file retrieval and team collaboration.",
    icon: "bi-folder2-open",
    color: "#198754",
    tools: ["Google Drive", "Notion", "Trello"],
    highlights: [
      "Cloud-based organization",
      "Standard operating procedures",
      "Team collaboration workflows",
      "Searchable documentation"
    ]
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(portfolioData.map((item) => item.category))];

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

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
              <Card
                className="portfolio-card h-100 border-0 shadow-sm"
                onClick={() => openModal(item)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="portfolio-image"
                  style={{ "--portfolio-color": item.color }}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                    <span className="portfolio-view">
                      <i className="bi bi-eye me-1"></i> View Details
                    </span>
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

      {/* Portfolio Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="lg"
        className="portfolio-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <div
                className="modal-icon-wrapper"
                style={{ "--modal-color": selectedProject.color }}
              >
                <i className={`bi ${selectedProject.icon}`}></i>
              </div>
            </Modal.Header>
            <Modal.Body className="pt-3">
              <Badge
                bg="primary"
                className="mb-3"
                style={{ backgroundColor: selectedProject.color }}
              >
                {selectedProject.category}
              </Badge>
              <h3 className="mb-3">{selectedProject.title}</h3>
              <p className="text-muted mb-4">{selectedProject.fullDescription}</p>

              <div className="mb-4">
                <h5 className="h6 mb-3">
                  <i className="bi bi-tools me-2 text-primary"></i>
                  Tools Used
                </h5>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, index) => (
                    <Badge key={index} bg="light" text="dark" className="tool-badge">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="h6 mb-3">
                  <i className="bi bi-star me-2 text-primary"></i>
                  Key Highlights
                </h5>
                <ul className="highlights-list">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 pt-0">
              <button className="btn btn-outline-secondary" onClick={closeModal}>
                Close
              </button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Portfolio;

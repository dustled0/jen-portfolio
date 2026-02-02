import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

const canvaProjects = [
  {
    id: 1,
    title: "Creative Design 1",
    description: "Professional graphic design created with Canva",
    image: "canva1.jfif",
  },
  {
    id: 2,
    title: "Creative Design 2",
    description: "Eye-catching visual content for branding",
    image: "canva2.jfif",
  },
  {
    id: 3,
    title: "Creative Design 3",
    description: "Marketing material designed for engagement",
    image: "canva3.jfif",
  },
];

function CanvaGallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeLightbox = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = canvaProjects.findIndex(
      (p) => p.id === selectedProject.id
    );
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? canvaProjects.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === canvaProjects.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedProject(canvaProjects[newIndex]);
  };

  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="canva-gallery" className="section-padding bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title" data-aos="fade-up">
              Canva Projects
            </h2>
            <div
              className="section-divider"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="150">
              A showcase of my creative designs made with Canva
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {canvaProjects.map((project, index) => (
            <Col
              md={6}
              lg={4}
              key={project.id}
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                className="canva-gallery-item"
                onClick={() => openLightbox(project)}
              >
                <div className="canva-image-wrapper">
                  <img
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    className="canva-image"
                  />
                  <div className="canva-overlay">
                    <div className="canva-overlay-content">
                      <i className="bi bi-zoom-in"></i>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        show={showModal}
        onHide={closeLightbox}
        centered
        size="xl"
        className="canva-lightbox"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 position-relative">
          {selectedProject && (
            <>
              <img
                src={`${basePath}${selectedProject.image}`}
                alt={selectedProject.title}
                className="lightbox-image"
              />
              <button
                className="lightbox-nav lightbox-prev"
                onClick={() => navigateImage("prev")}
                aria-label="Previous image"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={() => navigateImage("next")}
                aria-label="Next image"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <p className="text-muted mb-0">{selectedProject?.description}</p>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default CanvaGallery;

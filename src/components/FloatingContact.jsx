import { useState } from "react";
import { resumeData } from "../data/resumeData";

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = resumeData;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const contactOptions = [
    {
      icon: "bi-envelope-fill",
      label: "Email",
      href: `mailto:${personal.email}`,
      color: "#ea4335",
    },
    {
      icon: "bi-telephone-fill",
      label: "Phone",
      href: `tel:${personal.phone}`,
      color: "#25d366",
    },
    {
      icon: "bi-linkedin",
      label: "LinkedIn",
      href: personal.linkedin,
      target: "_blank",
      color: "#0077b5",
    },
  ];

  return (
    <div className="floating-contact">
      <div className={`contact-options ${isOpen ? "open" : ""}`}>
        {contactOptions.map((option, index) => (
          <a
            key={index}
            href={option.href}
            target={option.target}
            rel={option.target ? "noopener noreferrer" : undefined}
            className="contact-option"
            style={{ "--option-color": option.color }}
            aria-label={option.label}
            onClick={() => setIsOpen(false)}
          >
            <i className={`bi ${option.icon}`}></i>
            <span className="contact-tooltip">{option.label}</span>
          </a>
        ))}
      </div>
      <button
        className={`floating-contact-btn ${isOpen ? "open" : ""}`}
        onClick={toggleOpen}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-chat-dots-fill"}`}></i>
      </button>
    </div>
  );
}

export default FloatingContact;

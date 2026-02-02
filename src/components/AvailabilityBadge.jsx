function AvailabilityBadge() {
  const isAvailable = true; // Can be made configurable via resumeData

  return (
    <div className="availability-badge" data-aos="fade-left" data-aos-delay="700">
      <span className={`status-dot ${isAvailable ? "available" : "unavailable"}`}></span>
      <span className="status-text">
        {isAvailable ? "Available for Hire" : "Currently Unavailable"}
      </span>
    </div>
  );
}

export default AvailabilityBadge;

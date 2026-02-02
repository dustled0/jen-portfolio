import { useState, useEffect } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-initials">JJ</div>
        <div className="preloader-spinner"></div>
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
}

export default Preloader;

import React, { useState, useEffect, useRef } from "react";

const ProgressBar = ({ label, value }) => {
  const progressRef = useRef(null);  // To reference the progress bar
  const [countStarted, setCountStarted] = useState(false);

  const handleScroll = () => {
    if (progressRef.current) {
      const sectionTop = progressRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight && !countStarted) {
        setCountStarted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [countStarted]);

  useEffect(() => {
    if (countStarted) {
      const progress = progressRef.current;
      const val = progress.getAttribute("data-value");
      setTimeout(() => {
        progress.style.width = `${val}%`;
      }, 300);
    }
  }, [countStarted]);

  return (
    <div className="progress-bar">
      <span className="label">{label}</span>
      <div className="progress">
        <div className="progress-value" ref={progressRef} data-value={value}></div>
      </div>
      <span className="percentage">{value}%</span>
    </div>
  );
};

export default ProgressBar;

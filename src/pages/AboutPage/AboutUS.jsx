import React from "react";
import './About.css';
import { sections } from "../Services/Services"; // Corrected import statement

function AboutUS() {
  return (
    <div className="container cont">
      <h1>About Us</h1>
      <p>This is where About information goes.</p>

      {/* You can use the sections object if needed */}
      <div>
        <h2>Our Services Overview</h2>
        {Object.entries(sections).map(([id, section]) => (
          <div key={id}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUS;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Services.css";
import { Link } from 'react-router-dom';


// Move sections outside of the component
const sections = {
  "project-strategy": {
    title: "Project Strategy",
    img:"../../../public/Digital-Marketing.jpg",
    content: "Content for Project Strategy...",
  },
  "digital-experience": {
    title: "Digital Experience",
    img:"",
    content: "Content for Digital Experience...",
  },
  "web-development": {
    title: "Web Development",
    img:"",
    content: "Content for Web Development...",
  },
  "graphic-design": {
    title: "Graphic Design",
    img:"",
    content: "Content for Graphic Design...",
  },
  "content-marketing": {
    title: "Content Marketing",
    img:"",
    content: "Content for Content Marketing...",
  },
  "reporting-analysis": {
    title: "Reporting & Analysis",
    img:"",
    content: "Content for Reporting & Analysis...",
  },
};

const ServicesPage = () => {
  const services = [
    {
      id: "project-strategy",
      icon: "🚀",
      title: "Project Strategy",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
    {
      id: "digital-experience",
      icon: "📝",
      title: "Digital Experience",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
    {
      id: "web-development",
      icon: "💻",
      title: "Web Development",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
    {
      id: "graphic-design",
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
    {
      id: "content-marketing",
      icon: "🗒️",
      title: "Content Marketing",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
    {
      id: "reporting-analysis",
      icon: "📊",
      title: "Reporting & Analysis",
      description:
        "Need something changed or is there something not quite working Aellente humour or randomised words",
    },
  ];

  // Get the current location from react-router
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 70; // Scroll 200px above the element
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  
  const ServiceTitles = () => {
    return (
      <div className="grid-container">
        {services.map((service) => (
          <Link
            to={`/Services#${service.id}`} 
            className="card-link"
            key={service.id}
          >
            <div className="card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-arrow">→</div>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  return (
    <div className="main service">
      <div className="frst">
        <h1 className="highlight">Our Services</h1>
      </div>

      <div className="offer-container ">
        <h3 className="offer-title">WHAT WE OFFER</h3>
        <h1 className="offer-heading">
          What We’re Offering Creative <span>Digital Service</span>
        </h1>

        {/* Service Cards */}
        <ServiceTitles />
      </div>

      {/* Dynamically generated sections */}
      {Object.entries(sections).map(([id, section]) => (
        <section id={id} key={id} className=" flex-wrap">
  <div>    
    <h2>{section.title}</h2>
          <p>{section.content}</p>
          <img style={{
            height:"550px",
            width:"550px"
          }} src={section.img} alt="" srcset="" />
          </div>
        </section>
      ))}

      <section id="web-design-section" className="web-design-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Web Design & Competitor Analysis</h1>
            <p className="main-text">
              This is the main factor that sets us apart from our competition and
              allows us to deliver a specialist business consultancy service.
            </p>
            <p className="sub-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised word.
            </p>
            <div className="tech-icons">
              <h4>Our Tech:</h4>
              <div className="icons">
                <img src={"./logo6.png"} alt="Sketch" />
                <img src={"./logo1.png"} alt="Figma" />
                <img src={"./logo2.png"} alt="Adobe XD" />
                <img src={"./logo3.png"} alt="Illustrator" />
                <img src={"./logo4.png"} alt="Invision" />
              </div>
            </div>
          </div>
          <div className="image-content">
            <img src={"./1.jpg"} alt="Handshake Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
export { sections };

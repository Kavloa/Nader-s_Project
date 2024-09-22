import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Home.css';  // Add custom styles if needed
import ControlledCarousel from "../../components/Carousel";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; // Corrected Button import
import ListGroup from 'react-bootstrap/ListGroup';
import ControlledCarousel2 from "../../components/Carousel2";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const HomePage = () => {
  const products = [
    { id: 1, name: "Product 1", image: "./bg-02.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "./bg-02.jpg", price: "$150" },
    { id: 1, name: "Product 1", image: "./bg-02.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "./bg-02.jpg", price: "$150" },
  ];  const product2 = [
    { id: 1, name: "Product 1", image: "./bg-02.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "./bg-02.jpg", price: "$150" },
    { id: 1, name: "Product 1", image: "./bg-02.jpg", price: "$100" },
    { id: 2, name: "Product 2", image: "./bg-02.jpg", price: "$150" },
  ];

  const imgslides = [
    {
      image: './COVER_1.jpg',
    },
    {
      image: './COVER 2.jpg',
    },
    {
      image: './COVER 3.jpg',
    },
 ];   
    
    const logos = [
    {
      image: './logo1.png',
    },
    {
      image: './logo2.png',
    },
    {
      image: './logo3.png',
    },
    {
      image: './logo4.png',
    },
    {
      image: './logo5.png',
    },
    {
      image: './logo6.png',
    },
    {
      image: './logo7.png',
    },
    {
      image: './logo8.png',
    },
    {
      image: './logo9.png',
    },
    {
      image: './logo10.png',
    },
    {
      image: './logo11.png',
    },
  ];  
  const slide2 = [
    {
      title: 'Great Work',
      description: "We've worked with Make to redesign our public and media website. Lorem ipsum is simply free text available in the market dolor sit amet, consectetur notted adipisicing elit sed do.",
      signature: 'Mahfuz Riad',
      role: 'Chief UX Designer'
    },
    {
      title: 'Amazing Collaboration',
      description: "We've worked with Make to redesign our public and media website. Lorem ipsum is simply free text available in the market dolor sit amet, consectetur notted adipisicing elit sed do.",
      signature: 'John Doe',
      role: 'Lead Developer'
    },
    {
      title: 'Innovative Solutions',
      description: "We've worked with Make to redesign our public and media website. Lorem ipsum is simply free text available in the market dolor sit amet, consectetur notted adipisicing elit sed do.",
      signature: 'Jane Smith',
      role: 'Product Manager'
    },
  ];
  
 
  
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'We improve your online presence.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority suspe ndissse suscipit sagittis',
    },
    {
      question: 'The trusted digital marketing agency',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority suspe ndissse suscipit sagittis',
    },
    {
      question: 'Will you be updating the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority suspe ndissse suscipit sagittis',
    },
    {
      question: 'Will you be updating the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum available, but the majority suspe ndissse suscipit sagittis',
    },
  ];

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

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [countStarted, setCountStarted] = useState(false);
  const [persStarted, setpersStarted] = useState(false);
  const countersRef = useRef(null);
  const PreseRef = useRef(null);

  const startCount = () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target.toLocaleString(); // Add commas for readability
        }
      };
      updateCount();
    });
  };

  const handleScroll = () => {
    if (countersRef.current) {
      const sectionTop = countersRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight && !countStarted) {
        setCountStarted(true);
        startCount();
      }
    }  
    
    if (PreseRef.current) {
      const sectionTop = PreseRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight && !persStarted) {
        setpersStarted(true);
        startProgressBars();
      }
    }
  };

  const startProgressBars = () => {
    const progress = document.querySelectorAll(".progress-value");
    progress.forEach((bar) => {
      const val = bar.getAttribute("data-value");
      setTimeout(() => {
        bar.style.width = `${val}%`;
      }, 300); // Small delay for smooth loading animation
    });
  };

  useEffect(() => {
    window.addEventListener("scroll" , handleScroll);
    return () => {
      window.removeEventListener("scroll" , handleScroll);
    };
  }, [countStarted]);


  

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
    <div className="home">
      {/* Carousel Section */}
      <ControlledCarousel slides={imgslides} />



      {/* Combined Row for both sections */}
      <Container fluid>
        <Row>
          {/* First Section */}
          <Col md={6}>
            <div className="part1">
              <div className="sec1 ">
                <Image src="./UBER ABOUT US.jpg" className="pic p-2 mb-3" thumbnail />
                <h1 className="mb-4">Incredibly fast and amazing features</h1>
                <p>
                At UberMS, we believe empathy is the starting point for every solution.
In an era of rapid technological advances, people are losing trust in what they see. To help brands balance authenticity with innovation, we create human-centric experiences that deeply connect brands to people’s real needs, wants, desires and hopes. We are an outcomes-obsessed brand experience agency that propels people and communities forward.
                </p>
                <Button variant="outline-warning">Learn More</Button>
              </div>
            </div>
          </Col>

          {/* Second Section */}
          <Col md={6} className="business-growth p-4 pt-5 pr-5 align-items-start">
          <p className="category">BUSINESS GROWTH</p>
            <h1 className="heading">
              Best Digital <span className="highlight">Creative Agency</span>
            </h1>
            <p className="description">
            At Uber Marketing Solutions, we bring over a decade of marketing expertise to help businesses thrive. With a proven track record of collaborating with Fortune 500 companies, we offer innovative, results-driven strategies tailored to your brand's unique needs.
            </p>

            <div className="cta-section d-flex justify-content-start flex-wrap my-4">
              <ListGroup>
              <ListGroup.Item className="mt-2 rounded"> 
                  <img src="./hex-check.svg"  alt=""  />Over 10 years of experience in marketing and brand strategy.</ListGroup.Item>
                <ListGroup.Item className="mt-2 border-top rounded"> 
                  <img src="./hex-check.svg"  alt="" />Proven success working with multiple Fortune 500 companies.</ListGroup.Item>
                <ListGroup.Item className="mt-2 border-top rounded"> 
                  <img src="./hex-check.svg"  alt="" />Data-driven, innovative marketing solutions designed for measurable results.</ListGroup.Item>
                  <ListGroup.Item className="mt-2 rounded"> 
                  <img src="./hex-check.svg"  alt=""  />Comprehensive services, from digital marketing to brand management.</ListGroup.Item>
                <ListGroup.Item className="mt-2 border-top rounded"> 
                  <img src="./hex-check.svg"  alt="" />A dedicated team focused on boosting visibility and engagement across all channels.</ListGroup.Item>
                <ListGroup.Item className="mt-2 border-top rounded"> 
                  <img src="./hex-check.svg"  alt="" />Tailored strategies to meet the unique needs of each client.</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="statistics-container " >
        <div className="stat-item">
          <h2 className="count" data-target="10000">0</h2>
          <p>EXPERIENCED DESIGNERS</p>
          <span>Our company has 100 experts</span>
        </div>
        <div className="stat-item"ref={countersRef}>
          <h2 className="count" data-target="5000">0</h2>
          <p>SATISFIED CUSTOMERS</p>
          <span>Our company has 5000 satisfied customers</span>
        </div>
        <div className="stat-item">
          <h2 className="count" data-target="1200">0</h2>
          <p>COMPLETED CASES</p>
          <span>We have completed 1200 cases</span>
        </div>
      </div>




    <div className=" offerings-container">
      <h3 className="offerings-title">WHAT WE OFFER</h3>
      <h1 className="offerings-heading">
        What We’re Offering Creative <span className="highlight">Digital Service</span>
      </h1>
      <ServiceTitles />

    </div>



    <div className="digital-solutions-container" >
      <div className="left-content">
        <h5 className="why-us">WHY US</h5>
        <h1 className="title">
          We Give You <span className="highlight">Digital Solutions</span>
        </h1>
        <p className=" mt-5 description" ref={PreseRef}>
          Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Fusce id velit ut tortor pretium viverra suspendisse fuis ultricies lacus sed turpis tincidunt id aliquet. Sed viverra tellus sed lectus vestibulum mattis.
        </p>
        <div className="progress-bar">
        <span className="label">Websit Development</span>
        <span className="percentage">85%</span>

        <div className="progress">
          <div className="progress-value" data-value="85"></div>
        </div>
      </div>

      <div className="progress-bar">
        <span className="label">Digital Products</span>
        <span className="percentage">75%</span>

        <div className="progress">
          <div className="progress-value" data-value="75"></div>
        </div>
      </div>

      <div className="progress-bar">
        <span className="label">Website Development</span>
        <span className="percentage">90%</span>

        <div className="progress">
          <div className="progress-value" data-value="90"></div>
        </div>
      </div>
       </div>
      <div className="right-content">
        <img
          src="./1.jpg" 
          alt="Person with laptop"
          className="person-image"
        />
      </div>
    </div>









    <div className="case-studies-container">
      <div className="text-content">
        <h5 className="subtitle">NEW CASE STUDIES</h5>
        <h1 className="title">
          We Are Passionate About Our Clients And <span className="highlight">Our Work</span>.
        </h1>
      </div>
      <div className="image-gallery mt-5">
        <div className="image-item">
          <img
            src="./1.webp" // Replace with actual image URL
            alt="City Street"
          />
        </div>
        <div className="image-item">
          <img
            src="./21.jpg" // Replace with actual image URL
            alt="Team Collaboration"
          />
        </div>
        <div className="image-item">
          <img
            src="./tt.jpg" // Replace with actual image URL
            alt="Keyboard and Stylus"
          />
        </div>
        <div className="image-item">
          <img
            src="./13.webp" // Replace with actual image URL
            alt="Man Working"
          />
        </div>
      </div>
    </div>



   <div className="testimonial-container">
  <h5 className="section-subtitle">TESTIMONIAL</h5>
  <h1 className="section-title">
    Our Clients Praise Us For <span className="highlight">Great Results</span>
  </h1>

  <div className="testimonial-content">
  </div>

  <div className="logos">
    <ControlledCarousel2 slides={logos} />
  </div>
</div>





    <div className="case-studies-container">
      <div className="text-content">
        <h5 className="subtitle">Blogs</h5>
        <h1 className="title">
          We Are Passionate About Our Clients And <span className="highlight">Our Work</span>.
        </h1>
      </div>
      {/* Products Section */}
      <Container>
        <Row>
          {product2.map((product) => (
            <Col key={product.id} md={2} lg={3} className="prod2">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>


    <Container fluid>
        <Row>

    <Col md={4} lg={3} className="mb-5" >
    <div className="subscribe-section">
      <h2>Subscribe to get information latest news and other offers</h2>
      <form className="subscribe-form">
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
      <div className="user-info">
         <h2 className="count" data-target="6414">0</h2>
        
        <p>Usual Users</p>
        <p>
          There are many variations of passages the majority have suffered
          alteration nesctetur cing elit If you are going to
        </p>
      </div>
    </div>
    </Col>

    <Col md={4} lg={3} className="mb-5" >
  <div className="faq-section">
      <h3>Popular Question</h3>
      <div className="questions">
        {questions.map((q, idx) => (
          <div key={idx} className="question-item">
            <div className="question" onClick={() => toggleAnswer(idx)}>
              <span>{q.question}</span>
              <span>{activeIndex === idx ? '-' : '+'}</span>
            </div>
            {activeIndex === idx && q.answer && (
              <div className="answer">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    </Col>
    </Row>
    </Container >
       


    </div>
  );
};

export default HomePage;

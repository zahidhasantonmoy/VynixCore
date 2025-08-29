import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartLine, FaRobot, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
      icon: <FaChartLine size={48} className="text-primary" />,
      details: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Marketing',
        'Content Strategy & Creation',
        'Email Marketing Campaigns',
        'Analytics & Reporting'
      ]
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Custom websites and web applications built for performance, scalability, and user experience.',
      icon: <FaLaptopCode size={48} className="text-primary" />,
      details: [
        'Responsive Website Design',
        'E-commerce Solutions',
        'Content Management Systems (CMS)',
        'Progressive Web Apps (PWA)',
        'Website Maintenance & Support',
        'Performance Optimization'
      ]
    },
    {
      id: 3,
      title: 'AI Development',
      description: 'Cutting-edge AI solutions to automate processes, gain insights, and enhance customer experiences.',
      icon: <FaRobot size={48} className="text-primary" />,
      details: [
        'AI Chatbots & Virtual Assistants',
        'Predictive Analytics',
        'Machine Learning Models',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'Automation MVPs'
      ]
    },
    {
      id: 4,
      title: 'App Development',
      description: 'Cross-platform mobile and web applications designed to engage users and solve business challenges.',
      icon: <FaMobileAlt size={48} className="text-primary" />,
      details: [
        'iOS & Android App Development',
        'Cross-Platform Solutions (Flutter, React Native)',
        'Web Application Development',
        'App UI/UX Design',
        'App Testing & Deployment',
        'Maintenance & Updates'
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce',
      description: 'Developed a conversational AI chatbot that increased customer engagement by 60% and reduced support tickets by 40%.',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign',
      description: 'Executed a comprehensive digital marketing campaign that boosted online sales by 120% in 3 months.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Mobile App for Startup',
      description: 'Built a cross-platform mobile app that helped a startup acquire 10,000+ users in the first month.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead">
                Comprehensive digital solutions tailored to your business needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Details */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
              <p className="lead">
                Our integrated approach combines technical expertise with creative thinking to deliver solutions that drive real results.
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col key={service.id} md={6} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3">{service.icon}</div>
                      <Card.Title className="mb-0">{service.title}</Card.Title>
                    </div>
                    <Card.Text className="mb-3">{service.description}</Card.Text>
                    <ul className="list-unstyled">
                      {service.details.map((detail, index) => (
                        <li key={index} className="mb-1">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <Button variant="primary" href="/contact">
                        Request a Quote
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="bg-light py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Case Studies</h2>
              <p className="lead">
                Real-world examples of how we've helped businesses achieve their goals.
              </p>
            </Col>
          </Row>
          <Row>
            {caseStudies.map((study) => (
              <Col key={study.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={study.image} 
                    alt={study.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{study.title}</Card.Title>
                    <Card.Text>{study.description}</Card.Text>
                    <Button variant="outline-primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
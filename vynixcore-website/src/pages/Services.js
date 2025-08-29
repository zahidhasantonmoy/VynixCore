import React from 'react';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaRobot, 
  FaLaptopCode, 
  FaMobileAlt,
  FaSearch,
  FaAd,
  FaHashtag,
  FaEnvelopeOpen,
  FaChartBar,
  FaComments,
  FaBrain,
  FaCogs,
  FaDatabase,
  FaLanguage,
  FaEye,
  FaDesktop,
  FaShoppingCart,
  FaWordpress,
  FaAppStore,
  FaAndroid,
  FaApple
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive conversions.',
      icon: <FaChartLine size={48} className="text-white" />,
      details: [
        {
          icon: <FaSearch className="me-2" />,
          title: 'Search Engine Optimization (SEO)',
          description: 'Improve your website\'s visibility in search engines with our data-driven SEO strategies.'
        },
        {
          icon: <FaAd className="me-2" />,
          title: 'Pay-Per-Click Advertising (PPC)',
          description: 'Targeted advertising campaigns that deliver measurable ROI for your business.'
        },
        {
          icon: <FaHashtag className="me-2" />,
          title: 'Social Media Marketing',
          description: 'Engage your audience and build brand awareness through strategic social media campaigns.'
        },
        {
          icon: <FaEnvelopeOpen className="me-2" />,
          title: 'Email Marketing',
          description: 'Personalized email campaigns that nurture leads and drive customer retention.'
        },
        {
          icon: <FaChartBar className="me-2" />,
          title: 'Analytics & Reporting',
          description: 'Data-driven insights to optimize your marketing efforts and maximize ROI.'
        }
      ]
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Custom websites and web applications built for performance, scalability, and user experience.',
      icon: <FaLaptopCode size={48} className="text-white" />,
      details: [
        {
          icon: <FaDesktop className="me-2" />,
          title: 'Responsive Website Design',
          description: 'Modern, mobile-friendly websites that look great on all devices.'
        },
        {
          icon: <FaShoppingCart className="me-2" />,
          title: 'E-commerce Solutions',
          description: 'Custom online stores with secure payment processing and inventory management.'
        },
        {
          icon: <FaWordpress className="me-2" />,
          title: 'Content Management Systems (CMS)',
          description: 'Easy-to-manage websites with WordPress, Drupal, or custom CMS solutions.'
        },
        {
          icon: <FaCogs className="me-2" />,
          title: 'Web Application Development',
          description: 'Custom web applications tailored to your business needs and workflows.'
        },
        {
          icon: <FaChartBar className="me-2" />,
          title: 'Performance Optimization',
          description: 'Speed up your website and improve user experience with our optimization services.'
        }
      ]
    },
    {
      id: 3,
      title: 'AI Development',
      description: 'Cutting-edge AI solutions to automate processes, gain insights, and enhance customer experiences.',
      icon: <FaRobot size={48} className="text-white" />,
      details: [
        {
          icon: <FaComments className="me-2" />,
          title: 'AI Chatbots & Virtual Assistants',
          description: 'Intelligent conversational agents that provide 24/7 customer support.'
        },
        {
          icon: <FaBrain className="me-2" />,
          title: 'Machine Learning Models',
          description: 'Custom ML solutions for predictive analytics, recommendation engines, and more.'
        },
        {
          icon: <FaDatabase className="me-2" />,
          title: 'Predictive Analytics',
          description: 'Data-driven insights to anticipate trends and make informed business decisions.'
        },
        {
          icon: <FaLanguage className="me-2" />,
          title: 'Natural Language Processing (NLP)',
          description: 'Advanced text analysis and generation capabilities for your business.'
        },
        {
          icon: <FaEye className="me-2" />,
          title: 'Computer Vision Solutions',
          description: 'Image and video analysis tools for automation and quality control.'
        }
      ]
    },
    {
      id: 4,
      title: 'App Development',
      description: 'Cross-platform mobile and web applications designed to engage users and solve business challenges.',
      icon: <FaMobileAlt size={48} className="text-white" />,
      details: [
        {
          icon: <FaAndroid className="me-2" />,
          title: 'Android App Development',
          description: 'Native Android applications with intuitive interfaces and robust functionality.'
        },
        {
          icon: <FaApple className="me-2" />,
          title: 'iOS App Development',
          description: 'Native iOS applications built with Swift for optimal performance.'
        },
        {
          icon: <FaAppStore className="me-2" />,
          title: 'Cross-Platform Solutions',
          description: 'Single codebase applications for both iOS and Android using Flutter or React Native.'
        },
        {
          icon: <FaDesktop className="me-2" />,
          title: 'Web Application Development',
          description: 'Progressive web apps that combine the best of web and mobile experiences.'
        },
        {
          icon: <FaCogs className="me-2" />,
          title: 'App Maintenance & Updates',
          description: 'Ongoing support and updates to keep your applications running smoothly.'
        }
      ]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce',
      description: 'Developed a conversational AI chatbot that increased customer engagement by 60% and reduced support tickets by 40%.',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      category: 'AI Development'
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign',
      description: 'Executed a comprehensive digital marketing campaign that boosted online sales by 120% in 3 months.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      category: 'Digital Marketing'
    },
    {
      id: 3,
      title: 'Mobile App for Startup',
      description: 'Built a cross-platform mobile app that helped a startup acquire 10,000+ users in the first month.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      category: 'App Development'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero py-5">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              Comprehensive digital solutions tailored to your business needs. 
              From AI development to web and mobile applications, we deliver cutting-edge technology from our base in Bangladesh.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Details */}
      <section className="py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-5 fw-bold mb-3">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Our integrated approach combines technical expertise with creative thinking to deliver solutions that drive real results.
            </p>
          </motion.div>
          
          <Row>
            {services.map((service, index) => (
              <Col key={service.id} md={6} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="service-card h-100 border-0 shadow">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="service-icon me-4">
                          {service.icon}
                        </div>
                        <div>
                          <Card.Title className="fw-bold mb-1">{service.title}</Card.Title>
                          <Card.Text className="mb-0">{service.description}</Card.Text>
                        </div>
                      </div>
                      
                      <Accordion defaultActiveKey="0" className="service-accordion">
                        {service.details.map((detail, idx) => (
                          <Accordion.Item eventKey={idx.toString()} key={idx}>
                            <Accordion.Header>
                              <span className="d-flex align-items-center">
                                {detail.icon}
                                {detail.title}
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              {detail.description}
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                      
                      <div className="mt-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            variant="primary" 
                            className="rounded-pill px-4"
                            href="/contact"
                          >
                            Request a Quote
                          </Button>
                        </motion.div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-5 bg-light">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-5 fw-bold mb-3">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Real-world examples of how we've helped businesses achieve their goals.
            </p>
          </motion.div>
          
          <Row>
            {caseStudies.map((study, index) => (
              <Col key={study.id} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="project-card h-100 border-0 shadow">
                    <div className="project-image-container">
                      <Card.Img 
                        variant="top" 
                        src={study.image} 
                        alt={study.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-category">
                          {study.category}
                        </div>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column p-4">
                      <Card.Title className="fw-bold mb-3">{study.title}</Card.Title>
                      <Card.Text className="flex-grow-1">{study.description}</Card.Text>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline-primary" className="rounded-pill px-4">
                          Learn More
                        </Button>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient text-white">
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="lead mb-4">
                  Let's discuss how VynixCore can help you achieve your digital goals with our expertise from Bangladesh.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="light" 
                    size="lg" 
                    className="rounded-pill px-5 py-3 fw-bold"
                    href="/contact"
                  >
                    Get in Touch Today
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
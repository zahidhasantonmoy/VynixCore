import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaRobot, 
  FaLaptopCode, 
  FaMobileAlt,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Service data
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our data-driven marketing strategies.',
      icon: <FaChartLine size={48} className="text-white" />,
      features: [
        'SEO & Content Marketing',
        'Social Media Management',
        'PPC Campaigns',
        'Analytics & Reporting'
      ]
    },
    {
      id: 2,
      title: 'AI Development',
      description: 'Cutting-edge AI solutions to automate and optimize your business processes.',
      icon: <FaRobot size={48} className="text-white" />,
      features: [
        'AI Chatbots',
        'Machine Learning Models',
        'Predictive Analytics',
        'Natural Language Processing'
      ]
    },
    {
      id: 3,
      title: 'Web & App Development',
      description: 'Custom websites and mobile applications built for performance and scalability.',
      icon: <FaLaptopCode size={48} className="text-white" />,
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Mobile Applications',
        'Progressive Web Apps'
      ]
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Nusrat Jahan',
      company: 'Dhaka Tech Solutions',
      quote: 'VynixCore transformed our digital presence. Their AI solution saved us 40 hours per week!',
      rating: 5
    },
    {
      id: 2,
      name: 'Rahim Ahmed',
      company: 'Chittagong Ecom',
      quote: 'The web development team delivered beyond our expectations. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Tasnim Khan',
      company: 'Sylhet Innovations',
      quote: 'Their digital marketing expertise helped us double our online conversions in just 3 months.',
      rating: 5
    }
  ];

  // Stats data
  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section position-relative py-5">
        <div className="hero-overlay"></div>
        <Container className="py-5 position-relative">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold mb-4 text-gradient">
                  Powering Your Digital Future with VynixCore
                </h1>
                <p className="lead mb-4">
                  Your all-in-one solution for digital transformation in 2025. 
                  We specialize in AI, web development, and digital marketing from our base in Bangladesh.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="rounded-pill px-4 py-2"
                      href="/contact"
                    >
                      Get a Free Consultation
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline-primary" 
                      size="lg" 
                      className="rounded-pill px-4 py-2"
                      href="/portfolio"
                    >
                      View Our Work
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hero-image-container p-4 rounded-4 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                    alt="Digital Transformation" 
                    className="hero-image rounded-3" 
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Highlights */}
      <section className="py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-5 fw-bold mb-3">Our <span className="text-gradient">Services</span></h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We offer a comprehensive suite of digital services to help your business thrive in the modern economy.
            </p>
          </motion.div>
          
          <Row>
            {services.map((service, index) => (
              <Col key={service.id} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="service-card h-100 border-0 shadow-lg">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <div className="service-icon mb-4">
                        {service.icon}
                      </div>
                      <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                      <Card.Text className="mb-4">{service.description}</Card.Text>
                      <ul className="list-unstyled text-start w-100 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">
                            <FaCheckCircle className="text-success me-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col key={index} md={3} className="mb-4 mb-md-0">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="display-4 fw-bold mb-2">{stat.number}</h2>
                  <p className="lead mb-0">{stat.label}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About CEO Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="ceo-image-container rounded-4 overflow-hidden shadow-lg">
                  <img 
                    src="/ceo.jpg" 
                    alt="Zahid Hasan Tonmoy" 
                    className="ceo-image" 
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </motion.div>
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="display-5 fw-bold mb-4">
                  Meet Our <span className="text-gradient">CEO & Founder</span>
                </h2>
                <p className="lead mb-4">
                  Hi, I'm Zahid Hasan Tonmoy, the founder and CEO of VynixCore. With over 7 years of experience in digital technologies, I've helped numerous businesses transform their digital presence.
                </p>
                <p className="mb-4">
                  Based in Bangladesh, I lead a team of passionate developers, designers, and marketers who are committed to delivering cutting-edge solutions that drive real business results.
                </p>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <FaQuoteLeft className="text-primary" size={24} />
                  </div>
                  <blockquote className="fst-italic mb-0">
                    "Innovation is not just about technology; it's about solving real problems for real people."
                  </blockquote>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <Button 
                    variant="primary" 
                    className="rounded-pill px-4"
                    href="https://zahidhasantonmoy.vercel.app/"
                    target="_blank"
                  >
                    View My Portfolio
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill px-4"
                    href="https://www.facebook.com/zahidhasantonmoybd"
                    target="_blank"
                  >
                    Connect on Facebook
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Slider */}
      <section className="py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="display-5 fw-bold mb-3">What Our <span className="text-gradient">Clients Say</span></h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col key={testimonial.id} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="testimonial-card h-100 border-0 shadow">
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-warning me-1" />
                        ))}
                      </div>
                      <Card.Text className="fst-italic mb-4">
                        <FaQuoteLeft className="text-primary me-2" />
                        {testimonial.quote}
                      </Card.Text>
                      <div className="mt-auto">
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
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

export default Home;
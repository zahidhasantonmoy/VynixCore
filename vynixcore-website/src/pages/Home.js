import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaChartLine, FaRobot, FaLaptopCode } from 'react-icons/fa';

const Home = () => {
  // Service data
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our data-driven marketing strategies.',
      icon: <FaChartLine size={48} className="text-primary" />
    },
    {
      id: 2,
      title: 'AI Development',
      description: 'Cutting-edge AI solutions to automate and optimize your business processes.',
      icon: <FaRobot size={48} className="text-primary" />
    },
    {
      id: 3,
      title: 'Web & App Development',
      description: 'Custom websites and mobile applications built for performance and scalability.',
      icon: <FaLaptopCode size={48} className="text-primary" />
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      company: 'TechStart Inc.',
      quote: 'VynixCore transformed our digital presence. Their AI solution saved us 40 hours per week!'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      company: 'EcomGrowth LLC',
      quote: 'The web development team delivered beyond our expectations. Highly recommended!'
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'InnovateCo',
      quote: 'Their digital marketing expertise helped us double our online conversions in just 3 months.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={8} className="mx-auto text-center">
              <motion.h1 
                className="display-4 fw-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Powering Your Digital Future with VynixCore
              </motion.h1>
              <motion.p 
                className="lead mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your all-in-one solution for digital transformation in 2025. 
                We specialize in AI, web development, and digital marketing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button variant="light" size="lg" href="/contact">
                  Get a Free Consultation
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Highlights */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead">
                We offer a comprehensive suite of digital services to help your business thrive in the modern economy.
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col key={service.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="mb-3">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <h2 className="display-4 fw-bold text-primary">100+</h2>
              <p className="lead">Projects Delivered</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="display-4 fw-bold text-primary">98%</h2>
              <p className="lead">Client Satisfaction</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="display-4 fw-bold text-primary">50+</h2>
              <p className="lead">Happy Clients</p>
            </Col>
            <Col md={3} className="mb-4">
              <h2 className="display-4 fw-bold text-primary">24/7</h2>
              <p className="lead">Support</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Slider */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
              <p className="lead">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Text className="fst-italic">"{testimonial.quote}"</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <strong>{testimonial.name}</strong>
                    <br />
                    <small className="text-muted">{testimonial.company}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
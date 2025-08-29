import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLightbulb, FaRocket, FaTachometerAlt } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Tech visionary with 15+ years in digital transformation.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'AI specialist and full-stack developer with a passion for innovation.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Marketing Director',
      bio: 'Digital marketing expert with a track record of successful campaigns.'
    }
  ];

  const values = [
    {
      title: 'Innovate',
      description: 'We stay ahead of the curve with cutting-edge technologies.',
      icon: <FaLightbulb size={36} className="text-primary" />
    },
    {
      title: 'Integrate',
      description: 'We seamlessly blend AI, web, and marketing for holistic solutions.',
      icon: <FaTachometerAlt size={36} className="text-primary" />
    },
    {
      title: 'Accelerate',
      description: 'We help businesses grow faster with our tailored strategies.',
      icon: <FaRocket size={36} className="text-primary" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">About VynixCore</h1>
              <p className="lead">
                We're on a mission to integrate AI, web, and app solutions for business growth in 2025.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={10} className="mx-auto">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="lead">
                Founded in 2020, VynixCore began with a simple vision: to create a one-stop digital 
                solutions agency that could help businesses navigate the rapidly evolving tech landscape. 
                What started as a small team of passionate developers and marketers has grown into a 
                full-service agency with expertise in AI, web development, and digital marketing.
              </p>
              <p className="lead">
                In 2025, we're positioned at the forefront of technological innovation, helping businesses 
                leverage the latest tools and strategies to stay competitive. Our integrated approach 
                combines technical expertise with creative thinking to deliver solutions that drive real results.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission/Vision */}
      <section className="bg-light py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Mission & Vision</h2>
              <p className="lead">
                Innovate, Integrate, Accelerate - Our core principles for 2025 and beyond.
              </p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="mb-3">{value.icon}</div>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Meet Our Team</h2>
              <p className="lead">
                The talented individuals who make VynixCore possible.
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member) => (
              <Col key={member.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt={member.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="lead mb-4">
                Let's discuss how VynixCore can help you achieve your digital goals.
              </p>
              <Button variant="light" size="lg" href="/contact">
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
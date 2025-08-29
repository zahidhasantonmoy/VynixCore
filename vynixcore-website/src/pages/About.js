import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaRocket, 
  FaTachometerAlt,
  FaGraduationCap,
  FaAward,
  FaGlobeAsia
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Zahid Hasan Tonmoy',
      role: 'CEO & Founder',
      bio: 'Tech visionary with 7+ years in digital transformation. Passionate about AI and innovative solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CTO',
      bio: 'AI specialist and full-stack developer with a passion for innovation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Marketing Director',
      bio: 'Digital marketing expert with a track record of successful campaigns.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const values = [
    {
      title: 'Innovate',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
      icon: <FaLightbulb size={36} className="text-white" />
    },
    {
      title: 'Integrate',
      description: 'We seamlessly blend AI, web, and marketing for holistic business solutions.',
      icon: <FaTachometerAlt size={36} className="text-white" />
    },
    {
      title: 'Accelerate',
      description: 'We help businesses grow faster with our tailored strategies and expertise.',
      icon: <FaRocket size={36} className="text-white" />
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'VynixCore was established in Bangladesh with a vision to provide cutting-edge digital solutions.'
    },
    {
      year: '2021',
      title: 'First 20 Clients',
      description: 'Successfully delivered projects for 20+ clients across various industries.'
    },
    {
      year: '2022',
      title: 'AI Specialization',
      description: 'Expanded our expertise to include AI development and machine learning solutions.'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Began working with international clients and expanded our portfolio globally.'
    },
    {
      year: '2024',
      title: '50+ Projects',
      description: 'Completed over 50 successful projects with a 98% client satisfaction rate.'
    },
    {
      year: '2025',
      title: 'Future Ready',
      description: 'Positioned as a leading digital transformation partner in Bangladesh and beyond.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero py-5">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">About <span className="text-primary">VynixCore</span></h1>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              We're on a mission to integrate AI, web, and app solutions for business growth in 2025, 
              operating from our base in Bangladesh with a global vision.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="display-5 fw-bold mb-4">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="lead mb-4">
                  Founded in 2020 in Dhaka, Bangladesh, VynixCore began with a simple vision: to create a one-stop 
                  digital solutions agency that could help businesses navigate the rapidly evolving tech landscape.
                </p>
                <p className="mb-4">
                  What started as a small team of passionate developers and marketers has grown into a 
                  full-service agency with expertise in AI, web development, and digital marketing. Our integrated 
                  approach combines technical expertise with creative thinking to deliver solutions that drive real results.
                </p>
                <p className="mb-4">
                  As we move through 2025, we're positioned at the forefront of technological innovation, 
                  helping businesses leverage the latest tools and strategies to stay competitive in the global market.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" size="lg" className="rounded-pill px-4" href="/contact">
                    Work With Us
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="story-image-container rounded-4 overflow-hidden shadow-lg">
                  <div className="story-placeholder bg-gradient" style={{ height: '450px' }}></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission/Vision */}
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
              Our <span className="text-gradient">Mission & Vision</span>
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Innovate, Integrate, Accelerate - Our core principles for 2025 and beyond.
            </p>
          </motion.div>
          
          <Row>
            {values.map((value, index) => (
              <Col key={index} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="value-card h-100 border-0 shadow">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <div className="value-icon mb-4">
                        {value.icon}
                      </div>
                      <Card.Title className="fw-bold mb-3">{value.title}</Card.Title>
                      <Card.Text>{value.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Journey Timeline */}
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
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Key milestones in our journey from a small startup to a leading digital solutions provider.
            </p>
          </motion.div>
          
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-badge">
                      <span>{milestone.year}</span>
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h5 className="fw-bold">{milestone.title}</h5>
                      </div>
                      <div className="timeline-body">
                        <p>{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              The talented individuals who make VynixCore possible.
            </p>
          </motion.div>
          
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={member.id} md={4} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="team-member h-100 border-0 shadow">
                    <Card.Img 
                      variant="top" 
                      src={member.image} 
                      alt={member.name}
                      className="team-image"
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fw-bold">{member.name}</Card.Title>
                      <Card.Subtitle className="mb-3 text-primary">{member.role}</Card.Subtitle>
                      <Card.Text>{member.bio}</Card.Text>
                      <div className="d-flex justify-content-center gap-3">
                        <Button variant="outline-primary" size="sm" className="rounded-circle">
                          <FaGraduationCap />
                        </Button>
                        <Button variant="outline-primary" size="sm" className="rounded-circle">
                          <FaAward />
                        </Button>
                        <Button variant="outline-primary" size="sm" className="rounded-circle">
                          <FaGlobeAsia />
                        </Button>
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

export default About;
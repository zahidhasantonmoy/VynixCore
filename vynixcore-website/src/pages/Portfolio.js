import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaLink, 
  FaGithub, 
  FaExternalLinkAlt,
  FaFilter,
  FaLaptop,
  FaMobileAlt,
  FaRobot
} from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce AI Chatbot',
      description: 'An intelligent chatbot for customer support and product recommendations.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'TensorFlow', 'React'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      description: 'A cross-platform mobile app for tracking workouts and nutrition.',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      description: 'A modern, responsive website for a Fortune 500 company.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['React', 'Next.js', 'CSS3'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Marketing Analytics Dashboard',
      description: 'A data visualization dashboard for marketing performance metrics.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'AI-Powered Content Generator',
      description: 'A tool that creates marketing copy using natural language generation.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1676823104075-0d4c99a704ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'GPT-3', 'FastAPI'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Restaurant Booking App',
      description: 'A mobile app for restaurant reservations and online ordering.',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['React Native', 'MongoDB', 'Stripe API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 7,
      title: 'Inventory Management System',
      description: 'A web-based solution for tracking and managing business inventory.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 8,
      title: 'Smart Home Automation',
      description: 'AI-powered system for controlling home devices and appliances.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      technologies: ['Python', 'IoT', 'Machine Learning'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaFilter /> },
    { id: 'web', name: 'Web Development', icon: <FaLaptop /> },
    { id: 'app', name: 'App Development', icon: <FaMobileAlt /> },
    { id: 'ai', name: 'AI Development', icon: <FaRobot /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="portfolio-hero py-5">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              Explore our latest projects and see how we've helped businesses transform their digital presence. 
              From AI solutions to web and mobile applications, discover the innovative work we've created from our base in Bangladesh.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Project Filters */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={filter === category.id ? 'primary' : 'outline-primary'}
                      className="rounded-pill px-4 py-2 d-flex align-items-center"
                      onClick={() => setFilter(category.id)}
                    >
                      <span className="me-2">{category.icon}</span>
                      {category.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="py-5">
        <Container>
          <Row>
            {filteredProjects.map((project, index) => (
              <Col key={project.id} md={6} lg={4} className="mb-4">
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
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-category">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </div>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column p-4">
                      <Card.Title className="fw-bold mb-2">{project.title}</Card.Title>
                      <Card.Text className="flex-grow-1 mb-3">{project.description}</Card.Text>
                      <div className="mb-3">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} bg="secondary" className="me-1 mb-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto d-flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            variant="primary" 
                            size="sm" 
                            className="rounded-pill px-3"
                            href={project.demoLink}
                          >
                            <FaExternalLinkAlt className="me-1" /> Demo
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="rounded-pill px-3"
                            href={project.codeLink}
                          >
                            <FaGithub className="me-1" /> Code
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
                <h2 className="display-5 fw-bold mb-4">Have a Project in Mind?</h2>
                <p className="lead mb-4">
                  Let's discuss how we can help bring your vision to life with our expertise from Bangladesh.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="light" 
                    size="lg" 
                    className="rounded-pill px-5 py-3 fw-bold"
                    href="/contact"
                  >
                    Get in Touch
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

export default Portfolio;
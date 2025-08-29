import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaLink, FaGithub } from 'react-icons/fa';

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
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'App Development' },
    { id: 'ai', name: 'AI Development' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Our Portfolio</h1>
              <p className="lead">
                Explore our latest projects and see how we've helped businesses transform their digital presence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Filters */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col>
              <div className="d-flex flex-wrap justify-content-center">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={filter === category.id ? 'primary' : 'outline-primary'}
                    className="me-2 mb-2"
                    onClick={() => setFilter(category.id)}
                  >
                    {category.name}
                  </Button>
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
            {filteredProjects.map((project) => (
              <Col key={project.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} bg="secondary" className="me-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button variant="primary" className="me-2" href={project.demoLink}>
                        <FaLink className="me-1" /> Demo
                      </Button>
                      <Button variant="outline-primary" href={project.codeLink}>
                        <FaGithub className="me-1" /> Code
                      </Button>
                    </div>
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
              <h2 className="display-5 fw-bold mb-4">Have a Project in Mind?</h2>
              <p className="lead mb-4">
                Let's discuss how we can help bring your vision to life.
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

export default Portfolio;
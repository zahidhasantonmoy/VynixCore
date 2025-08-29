import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing',
      excerpt: 'How artificial intelligence is reshaping the landscape of digital marketing in 2025 and beyond.',
      date: 'August 15, 2025',
      author: 'Alex Johnson',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Web3 Marketing: A New Frontier',
      excerpt: 'Exploring the emerging trends in Web3 marketing and how businesses can adapt.',
      date: 'August 10, 2025',
      author: 'Sarah Williams',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Scaling Mobile Applications in 2025',
      excerpt: 'Best practices for building scalable mobile applications that can handle rapid growth.',
      date: 'August 5, 2025',
      author: 'Michael Chen',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Ethical Considerations in AI Development',
      excerpt: 'Why ethical AI development is crucial for building trust and long-term success.',
      date: 'July 28, 2025',
      author: 'Alex Johnson',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1676823104075-0d4c99a704ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Optimizing Website Performance for SEO',
      excerpt: 'How site speed and performance impact search engine rankings and user experience.',
      date: 'July 20, 2025',
      author: 'Sarah Williams',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Building Cross-Platform Apps with Flutter',
      excerpt: 'A deep dive into Flutter and why it\'s becoming the go-to framework for cross-platform development.',
      date: 'July 15, 2025',
      author: 'Michael Chen',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const categories = ['AI', 'Marketing', 'Web Development', 'App Development'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">VynixCore Blog</h1>
              <p className="lead">
                Insights, trends, and expert perspectives on the latest in digital technology.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <Container>
          <Row>
            {/* Main Content */}
            <Col lg={8}>
              <Row>
                {blogPosts.map((post) => (
                  <Col key={post.id} md={6} className="mb-4">
                    <Card className="h-100 shadow-sm">
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        alt={post.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body className="d-flex flex-column">
                        <div className="mb-2">
                          <Badge bg="primary" className="me-1">
                            {post.category}
                          </Badge>
                        </div>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.excerpt}</Card.Text>
                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              {post.date} by {post.author}
                            </small>
                            <Button variant="outline-primary" size="sm">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <Card className="mb-4">
                <Card.Header>Categories</Card.Header>
                <Card.Body>
                  <div className="d-flex flex-wrap">
                    {categories.map((category, index) => (
                      <Button 
                        key={index} 
                        variant="outline-primary" 
                        size="sm" 
                        className="me-2 mb-2"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Header>Share This</Card.Header>
                <Card.Body>
                  <div className="d-flex">
                    <a href="#" className="text-primary me-3">
                      <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-primary me-3">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="#" className="text-primary">
                      <FaFacebook size={24} />
                    </a>
                  </div>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>Newsletter</Card.Header>
                <Card.Body>
                  <p>
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your email address" 
                    />
                  </div>
                  <Button variant="primary" className="w-100">
                    Subscribe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
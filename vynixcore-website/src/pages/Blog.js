import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Pagination } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook,
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaTags,
  FaArrowRight
} from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing',
      excerpt: 'How artificial intelligence is reshaping the landscape of digital marketing in 2025 and beyond.',
      date: 'August 15, 2025',
      author: 'Zahid Hasan Tonmoy',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Web3 Marketing: A New Frontier',
      excerpt: 'Exploring the emerging trends in Web3 marketing and how businesses can adapt.',
      date: 'August 10, 2025',
      author: 'Sarah Williams',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Scaling Mobile Applications in 2025',
      excerpt: 'Best practices for building scalable mobile applications that can handle rapid growth.',
      date: 'August 5, 2025',
      author: 'Michael Chen',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Ethical Considerations in AI Development',
      excerpt: 'Why ethical AI development is crucial for building trust and long-term success.',
      date: 'July 28, 2025',
      author: 'Zahid Hasan Tonmoy',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1676823104075-0d4c99a704ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Optimizing Website Performance for SEO',
      excerpt: 'How site speed and performance impact search engine rankings and user experience.',
      date: 'July 20, 2025',
      author: 'Sarah Williams',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Building Cross-Platform Apps with Flutter',
      excerpt: 'A deep dive into Flutter and why it's becoming the go-to framework for cross-platform development.',
      date: 'July 15, 2025',
      author: 'Michael Chen',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      readTime: '9 min read'
    }
  ];

  const categories = [
    { name: 'AI', count: 12 },
    { name: 'Marketing', count: 8 },
    { name: 'Web Development', count: 15 },
    { name: 'App Development', count: 10 },
    { name: 'Business', count: 7 }
  ];

  const popularPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      title: 'Building Cross-Platform Apps with Flutter',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      title: 'Ethical Considerations in AI Development',
      image: 'https://images.unsplash.com/photo-1676823104075-0d4c99a704ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="blog-hero py-5">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              VynixCore <span className="text-primary">Blog</span>
            </h1>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              Insights, trends, and expert perspectives on the latest in digital technology. 
              Stay updated with our thoughts from Bangladesh on AI, web development, and digital marketing.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <Container>
          <Row>
            {/* Main Content */}
            <Col lg={8}>
              <div className="mb-4">
                <div className="search-bar">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control rounded-pill" 
                      placeholder="Search articles..." 
                    />
                    <Button variant="primary" className="rounded-pill ms-2">
                      <FaSearch />
                    </Button>
                  </div>
                </div>
              </div>
              
              <Row>
                {blogPosts.map((post, index) => (
                  <Col key={post.id} md={6} className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="blog-card h-100 border-0 shadow">
                        <div className="blog-image-container">
                          <Card.Img 
                            variant="top" 
                            src={post.image} 
                            alt={post.title}
                            className="blog-image"
                          />
                          <div className="blog-overlay">
                            <Badge bg="primary" className="blog-category">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <Card.Body className="d-flex flex-column p-4">
                          <div className="d-flex align-items-center mb-3">
                            <small className="text-muted me-3">
                              <FaCalendarAlt className="me-1" /> {post.date}
                            </small>
                            <small className="text-muted">
                              <FaUser className="me-1" /> {post.author}
                            </small>
                          </div>
                          <Card.Title className="fw-bold mb-3">{post.title}</Card.Title>
                          <Card.Text className="flex-grow-1 mb-3">{post.excerpt}</Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              <FaClock className="me-1" /> {post.readTime}
                            </small>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button variant="outline-primary" size="sm" className="rounded-pill px-3">
                                Read More <FaArrowRight className="ms-1" />
                              </Button>
                            </motion.div>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
              
              {/* Pagination */}
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sticky-sidebar">
                {/* Categories */}
                <Card className="mb-4 border-0 shadow">
                  <Card.Header className="bg-white py-3">
                    <h5 className="mb-0 d-flex align-items-center">
                      <FaTags className="me-2 text-primary" />
                      Categories
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="rounded-pill px-3"
                          >
                            {category.name} <Badge bg="light" text="primary" className="ms-1">{category.count}</Badge>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Popular Posts */}
                <Card className="mb-4 border-0 shadow">
                  <Card.Header className="bg-white py-3">
                    <h5 className="mb-0">Popular Posts</h5>
                  </Card.Header>
                  <Card.Body>
                    {popularPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className="d-flex mb-3"
                        whileHover={{ x: 5 }}
                      >
                        <div className="popular-post-image me-3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="rounded"
                          />
                        </div>
                        <div>
                          <h6 className="mb-1">{post.title}</h6>
                          <small className="text-muted">5 min read</small>
                        </div>
                      </motion.div>
                    ))}
                  </Card.Body>
                </Card>

                {/* Newsletter */}
                <Card className="mb-4 border-0 shadow">
                  <Card.Header className="bg-white py-3">
                    <h5 className="mb-0">Newsletter</h5>
                  </Card.Header>
                  <Card.Body>
                    <p>
                      Subscribe to our newsletter for the latest updates and insights.
                    </p>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control rounded-pill" 
                        placeholder="Your email address" 
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="primary" className="w-100 rounded-pill">
                        Subscribe
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>

                {/* Share */}
                <Card className="border-0 shadow">
                  <Card.Header className="bg-white py-3">
                    <h5 className="mb-0">Share This</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-around">
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <a href="#" className="text-primary">
                          <FaFacebook size={24} />
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <a href="#" className="text-primary">
                          <FaTwitter size={24} />
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <a href="#" className="text-primary">
                          <FaLinkedin size={24} />
                        </a>
                      </motion.div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
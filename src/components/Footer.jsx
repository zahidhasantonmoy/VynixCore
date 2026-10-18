import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaPhone, 
  FaEnvelope, 
  FaGlobe 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-4 d-flex align-items-center">
                <span className="logo-circle-footer me-2">V</span>
                VynixCore
              </h4>
              <p className="mb-4 text-secondary text-light">
                Your all-in-one solution for digital transformation in 2025. 
                Based in Bangladesh, serving clients globally.
              </p>
              <div className="d-flex gap-3">
                <a 
                  href="https://www.facebook.com/zahidhasantonmoybd" 
                  className="text-light social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://zahidhasantonmoy.vercel.app/" 
                  className="text-light social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://instagram.com" 
                  className="text-light social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="text-light social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About</Link></li>
                <li className="mb-2"><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
                <li className="mb-2"><Link to="/portfolio" className="text-light text-decoration-none">Portfolio</Link></li>
                <li className="mb-2"><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>
                <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              </ul>
            </motion.div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className="mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <FaPhone className="me-3 mt-1 text-primary" />
                  <span>+880 1724 348000</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaEnvelope className="me-3 mt-1 text-primary" />
                  <span>zahidhasantonmoybd@gmail.com</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaGlobe className="me-3 mt-1 text-primary" />
                  <span>www.vynixcore.com</span>
                </li>
              </ul>
            </motion.div>
          </Col>
          
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h5 className="mb-4">Newsletter</h5>
              <p className="mb-3 text-secondary text-light">Subscribe to get updates on our latest services.</p>
              {subscribed ? (
                <div className="text-success fw-semibold">Thanks for subscribing!</div>
              ) : (
                <Form onSubmit={handleSubscribe} className="d-flex">
                  <Form.Control 
                    type="email" 
                    className="rounded-0" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button variant="primary" type="submit" className="rounded-0">
                    Subscribe
                  </Button>
                </Form>
              )}
            </motion.div>
          </Col>
        </Row>
        
        <hr className="my-4 bg-secondary" />
        
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 text-secondary text-light">&copy; {currentYear} VynixCore. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Link to="/about" className="text-light me-3 text-decoration-none">About Us</Link>
            <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
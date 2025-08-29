import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
              <h4 className="mb-4">
                <span className="logo-circle-footer me-2">V</span>
                VynixCore
              </h4>
              <p className="mb-4">
                Your all-in-one solution for digital transformation in 2025. 
                Based in Bangladesh, serving clients globally.
              </p>
              <div className="d-flex">
                <a 
                  href="https://www.facebook.com/zahidhasantonmoybd" 
                  className="text-light me-3 social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-light me-3 social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-light me-3 social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-light social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <li className="mb-2"><a href="/" className="text-light text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="/about" className="text-light text-decoration-none">About</a></li>
                <li className="mb-2"><a href="/services" className="text-light text-decoration-none">Services</a></li>
                <li className="mb-2"><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
                <li className="mb-2"><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
                <li className="mb-2"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
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
                  <FaPhone className="me-3 mt-1" />
                  <span>+880 1724 348000</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaEnvelope className="me-3 mt-1" />
                  <span>zahidhasantonmoybd@gmail.com</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaGlobe className="me-3 mt-1" />
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
              <p className="mb-3">Subscribe to get updates on our latest services.</p>
              <div className="d-flex">
                <input 
                  type="email" 
                  className="form-control rounded-0" 
                  placeholder="Your email" 
                />
                <Button variant="primary" className="rounded-0">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </Col>
        </Row>
        
        <hr className="my-4 bg-secondary" />
        
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; {currentYear} VynixCore. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#" className="text-light me-3 text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
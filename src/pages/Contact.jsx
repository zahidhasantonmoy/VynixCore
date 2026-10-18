import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaUser
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm VynixBot, your AI assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);

  const [userInput, setUserInput] = useState('');
  const chatContainerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const inputMsg = userInput;
    const newUserMessage = {
      id: Date.now(),
      text: inputMsg,
      sender: 'user'
    };

    setChatMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');

    setTimeout(() => {
      let botResponse = "Thanks for your message! Our team will get back to you shortly.";
      const lower = inputMsg.toLowerCase();
      if (lower.includes('service') || lower.includes('what do you do')) {
        botResponse = "VynixCore offers Digital Marketing (SEO/PPC/Social), Web Development, AI Development (chatbots & ML), and Mobile App Development. Which one interests you?";
      } else if (lower.includes('consultation') || lower.includes('quote') || lower.includes('price')) {
        botResponse = "We offer free initial consultations! Feel free to submit the contact form on this page or email us directly at zahidhasantonmoybd@gmail.com.";
      } else if (lower.includes('ai') || lower.includes('bot') || lower.includes('model')) {
        botResponse = "Our AI team specializes in conversational bots, predictive analytics, recommendation systems, and automated workflows.";
      } else if (lower.includes('location') || lower.includes('where') || lower.includes('bangladesh')) {
        botResponse = "We are headquartered in Dhaka, Bangladesh, and we collaborate with clients worldwide!";
      } else if (lower.includes('hello') || lower.includes('hi')) {
        botResponse = "Hello there! Glad to meet you. Tell me about your next project or goal!";
      }

      const newBotMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot'
      };

      setChatMessages((prev) => [...prev, newBotMessage]);
    }, 700);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero py-5">
        <Container className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="display-3 fw-bold mb-4 text-gradient">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
              Have a project in mind? Get in touch with us today. 
              Based in Bangladesh, we serve clients globally with cutting-edge digital solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={6} className="mb-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="contact-card h-100 border-0 shadow">
                  <Card.Body className="p-4">
                    <Card.Title className="mb-4 fw-bold">Send Us a Message</Card.Title>
                    {formSubmitted && (
                      <Alert variant="success" onClose={() => setFormSubmitted(false)} dismissible>
                        Thank you for your message! Our team at VynixCore will get back to you soon.
                      </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formName">
                        <InputGroup>
                          <InputGroup.Text>
                            <FaUser />
                          </InputGroup.Text>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Your Name"
                            required 
                          />
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <InputGroup>
                          <InputGroup.Text>
                            <FaEnvelope />
                          </InputGroup.Text>
                          <Form.Control 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Your Email"
                            required 
                          />
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formMessage">
                        <Form.Control 
                          as="textarea" 
                          rows={5} 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          placeholder="Your Message"
                          required 
                        />
                      </Form.Group>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="primary" type="submit" className="w-100 rounded-pill py-2">
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            {/* Contact Info and Chatbot */}
            <Col lg={6}>
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="contact-card mb-4 border-0 shadow">
                  <Card.Body className="p-4">
                    <Card.Title className="mb-4 fw-bold">Contact Information</Card.Title>
                    <div className="d-flex align-items-start mb-4">
                      <div className="contact-icon me-3 mt-1">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h6 className="mb-1">Email</h6>
                        <p className="mb-0">zahidhasantonmoybd@gmail.com</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                      <div className="contact-icon me-3 mt-1">
                        <FaPhone />
                      </div>
                      <div>
                        <h6 className="mb-1">Phone</h6>
                        <p className="mb-0">+880 1724 348000</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                      <div className="contact-icon me-3 mt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h6 className="mb-1">Office</h6>
                        <p className="mb-0">Dhaka, Bangladesh</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3 mt-1">
                        <FaUser />
                      </div>
                      <div>
                        <div className="mb-2">
                          <img 
                            src="/ceo.jpg" 
                            alt="Zahid Hasan Tonmoy" 
                            className="ceo-image rounded-circle" 
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80';
                            }}
                          />
                        </div>
                        <h6 className="mb-1">CEO & Founder</h6>
                        <p className="mb-2">Zahid Hasan Tonmoy</p>
                        <div className="d-flex gap-2">
                          <a 
                            href="https://www.facebook.com/zahidhasantonmoybd" 
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                          >
                            <FaFacebook />
                          </a>
                          <a 
                            href="https://zahidhasantonmoy.vercel.app/" 
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Portfolio"
                          >
                            <FaLinkedin />
                          </a>
                          <a 
                            href="https://twitter.com" 
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                          >
                            <FaTwitter />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* AI Chatbot Demo */}
                <Card className="contact-card border-0 shadow">
                  <Card.Body className="p-4">
                    <Card.Title className="mb-4 d-flex align-items-center fw-bold">
                      <FaRobot className="text-primary me-2" />
                      <span>AI Chatbot Demo</span>
                    </Card.Title>
                    
                    <div 
                      ref={chatContainerRef}
                      className="chat-container mb-3"
                    >
                      {chatMessages.map((message) => (
                        <div 
                          key={message.id} 
                          className={`chat-message ${message.sender}`}
                        >
                          <div 
                            className={`chat-bubble ${message.sender}`}
                          >
                            {message.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Form onSubmit={handleChatSubmit}>
                      <InputGroup>
                        <Form.Control 
                          type="text" 
                          value={userInput} 
                          onChange={(e) => setUserInput(e.target.value)} 
                          placeholder="Type your message..." 
                        />
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            variant="primary" 
                            type="submit"
                            className="rounded-end"
                            aria-label="Send message"
                          >
                            <FaPaperPlane />
                          </Button>
                        </motion.div>
                      </InputGroup>
                    </Form>
                    
                    <div className="mt-3">
                      <small className="text-muted">
                        This is an interactive demo chatbot for VynixCore inquiries.
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
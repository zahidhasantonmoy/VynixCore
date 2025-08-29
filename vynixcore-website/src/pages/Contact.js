import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaRobot, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm VynixBot, your AI assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);

  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      text: userInput,
      sender: 'user'
    };

    setChatMessages([...chatMessages, newUserMessage]);

    // Simulate bot response (in a real app, this would come from an API)
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "I've noted your inquiry. We'll contact you soon to discuss your project.",
        "Great question! One of our specialists will reach out to you soon.",
        "I've forwarded your message to our team. Expect a response within 24 hours."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage = {
        id: chatMessages.length + 2,
        text: randomResponse,
        sender: 'bot'
      };
      
      setChatMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);

    setUserInput('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row>
            <Col md={10} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead">
                Have a project in mind? Get in touch with us today.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={6} className="mb-5">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-4">Send Us a Message</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info and Chatbot */}
            <Col lg={6}>
              {/* Contact Info */}
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-4">Contact Information</Card.Title>
                  <div className="d-flex align-items-center mb-3">
                    <FaEnvelope className="text-primary me-3" size={24} />
                    <div>
                      <h6 className="mb-0">Email</h6>
                      <p className="mb-0">info@vynixcore.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FaPhone className="text-primary me-3" size={24} />
                    <div>
                      <h6 className="mb-0">Phone</h6>
                      <p className="mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaMapMarkerAlt className="text-primary me-3" size={24} />
                    <div>
                      <h6 className="mb-0">Office</h6>
                      <p className="mb-0">123 Tech Street, San Francisco, CA 94103</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* AI Chatbot Demo */}
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-4 d-flex align-items-center">
                    <FaRobot className="text-primary me-2" />
                    <span>AI Chatbot Demo</span>
                  </Card.Title>
                  
                  <div 
                    className="border rounded p-3 mb-3" 
                    style={{ height: '250px', overflowY: 'auto' }}
                  >
                    {chatMessages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`mb-2 ${message.sender === 'user' ? 'text-end' : ''}`}
                      >
                        <div 
                          className={`d-inline-block p-2 rounded ${
                            message.sender === 'user' 
                              ? 'bg-primary text-white' 
                              : 'bg-light'
                          }`}
                          style={{ 
                            maxWidth: '80%', 
                            wordWrap: 'break-word',
                            textAlign: 'left'
                          }}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Form onSubmit={handleChatSubmit}>
                    <div className="d-flex">
                      <Form.Control 
                        type="text" 
                        value={userInput} 
                        onChange={(e) => setUserInput(e.target.value)} 
                        placeholder="Type your message..." 
                        className="me-2"
                      />
                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </div>
                  </Form>
                  
                  <div className="mt-3">
                    <small className="text-muted">
                      This is a demo chatbot. In a real application, this would be connected to an AI service.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
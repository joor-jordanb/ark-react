import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';

const EmailSignUp = ({ children }) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter your ARK card number:</Form.Label>
        <Form.Control type="email" placeholder="ARK card number" />
        <Form.Text className="text-muted">
          Thank you for participating in acts of random kindness!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">ARK</h1>
      <EmailSignUp/>
    </Jumbotron>
  </Container>
);

export default App;

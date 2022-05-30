import React from 'react';
import { Container, Nav, Navbar, Image, Card, Button, Form, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {
  return (
      <Container>
        <Form className='mt-5 p-4' style={{ border: 'solid #f7f7f7', borderRadius: '1rem' }}>
          <h3 className='mb-4'>Patient Registration</h3>
          <hr />
          <Row className='gy-2' xxs={1} xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control required type='password' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control required type='date' />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control required type='email' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>

            <Col xxs={12} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control required type='text' />
              </Form.Group>
            </Col>
          </Row>
          <Button className='mt-4' variant='primary' type='submit'>
            Register
          </Button>
        </Form>
      </Container>
  );
};

export default RegisterPage;

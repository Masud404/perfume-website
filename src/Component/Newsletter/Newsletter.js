import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='news-letter'>
            <Container>
                <Row className='my-5'>
                    <Col sm={12} md={6} className='my-5 sign-up-purchase'>
                        <h2>NEWSLETTER</h2>
                        <p>Sign Up to our newsletter and save 20% off for your next purchase</p>
                    </Col>
                    <Col sm={12} md={6} className='my-5'>
                        <div className='mt-5'>
                            <InputGroup className="">
                                <FormControl
                                    placeholder="Enter Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">SUBSCRIBE</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;
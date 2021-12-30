import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import card1 from '../../images/card-1.png'
import card2 from '../../images/card-2.png'
import card3 from '../../images/card-4.png'
import card4 from '../../images/card-5.png'
import card5 from '../../images/card-6.png'
import card6 from '../../images/card-7.png'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row className='text-light py-5 text-center'>
                    <Col sm={12} md={3}>
                        <h5 className='mb-5 title'>Company</h5>
                        <p>- About Us</p>
                        <p>- Contact Us</p>
                        <p>- Privacy Policy</p>
                        <p>- Terms & Conditions</p>
                        <p>- Support Centre</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h5 className='mb-5 title'>Questions?</h5>
                        <p>- Help Support</p>
                        <p>- Track Order</p>
                        <p>- Return</p>
                        <p>- Shipping Info</p>
                        <p>- History</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h5 className='mb-5 title'>Useful Links</h5>
                        <p>- Gift Cards</p>
                        <p>- Size Chart</p>
                        <p>- My Account</p>
                        <p>- Our Locations</p>
                        <p>- FAQs</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h5 className='mb-5 title'>Connect With Us</h5>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-google-plus-g"></i>
                        <p className='mt-5'><i class="fas fa-location-arrow"></i>  123, Fulbarigate, Kuet, Khulna<br></br>Bangladesh</p>
                        <p><i class="fas fa-envelope"></i>  masud215502@gmail.com</p>
                        <p><i class="fas fa-phone"></i>  01929039442</p>
                    </Col>
                </Row>
                <div className='payment text-center'>
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                    <img src={card3} alt="" />
                    <img src={card4} alt="" />
                    <img src={card5} alt="" />
                    <img src={card6} alt="" />
                </div>
                <div className='text-light text-center py-5'>
                    <p>Perfume <i class="far fa-copyright"></i> 2021. Made with <i class="fas fa-heart"></i> by Md: Masud Hossain</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
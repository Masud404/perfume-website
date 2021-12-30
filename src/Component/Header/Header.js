import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css'
import photo1 from '../../images/photo_1.jpg'
import side1 from '../../images/side-img_1.jpg'
import side2 from '../../images/side-img_2.jpg'
import headerimg from '../../images/home_img.jpg'

const Header = () => {
    return (
        <div>

            <Row>
                <Col sm={6} md={6}>
                    <img className='img-fluid' src={photo1} alt="" />
                </Col>

                <Col sm={6} md={6}>
                    <Row>
                        <Col sm={6} md={6}>
                            <img className='img-fluid' src={side1} alt="" />
                        </Col>

                        <Col sm={6} md={6}>
                            <img className='img-fluid' src={side2} alt="" />
                        </Col>
                    </Row>
                    <div>
                        <img className='img-fluid mt-4' src={headerimg} alt="" />
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Header;
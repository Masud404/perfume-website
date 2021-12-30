import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Perfumeshop.css'
import logotitle from '../../images/title-02.png'
import menperfume from '../../images/menimg.jpg'
import beutiy from '../../images/beutyimg.jpg'

const Perfumeshop = () => {
    return (
        <div className='perfume-shop my-5'>
            <Container>
                <Row>
                    <Col sm={12} md={4} className='shop-quality'>
                        <div className='text-center my-5 pt-5'>
                            <img className='mb-4' src={logotitle} alt="" />
                            <h4 className='text-light'>High Quality</h4>
                            <h4 className='shop'>Perfume Shop</h4>
                            <p className='text-light'>Modern and stylish furniture with a <br></br>contemporary look. Perfume Store Extended collection features</p>
                            <a className='link fw-bold' href="http://" target="_blank" rel="noopener noreferrer">SHOP NOW</a>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                            <img className='img-fluid' src={menperfume} alt="" />
                            <h5 className='mt-4 text-center'>MAN/WOMEN'S PERFUME</h5>
                            <p className='text-center'>If you are looking for great ways to decorate your home</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                            <img className='img-fluid' src={beutiy} alt="" />
                            <h5 className='mt-4 text-center'>WEDDING COLLECTION</h5>
                            <p className='text-center'>The leading online destination for men's contemporary</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Perfumeshop;
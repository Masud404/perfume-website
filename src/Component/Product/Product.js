import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Product.css'
import logotitle from '../../images/title-01.png'
import Products from '../Products/Products';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    return (
        <div className='product-title py-5'>
            <Container>
                <div className='text-center py-5'>
                    <img src={logotitle} alt="" />
                    <h1 className='fw-bold'>Our Products</h1>
                </div>
                <Row xs={1} md={3} className="g-4">

                    {
                        product.slice(0, 6).map((product, key) => <Products
                            key={key}
                            product={product}
                        ></Products>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Product;
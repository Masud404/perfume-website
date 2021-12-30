import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Products.css'

const Products = ({ product }) => {
    const { name, img, type, price, ratting } = product;
    return (
        <div>
            <Col>
                <Card className='card-product'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-center fw-bold'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Type: {type}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Products;
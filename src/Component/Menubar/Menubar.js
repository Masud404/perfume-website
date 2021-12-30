import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css'
import logo from '../../images/logo-color.png'

const Menubar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end nav-item">

                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Wedding</Nav.Link>
                        <Nav.Link href="#pricing">Exclusive Gift</Nav.Link>
                        <Nav.Link href="#pricing">Features</Nav.Link>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;
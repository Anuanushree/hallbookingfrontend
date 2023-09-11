import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigater() {
    const handlefont = (event) => {
        event.preventDefault();

    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='nav-bg'>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav" href="home">Home</Nav.Link>
                        <Nav.Link className="nav" href="create">Create Hall</Nav.Link>
                        <Nav.Link className="nav" href="booking">booking</Nav.Link>
                        <Nav.Link className="nav" href="list">booking details</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigater;
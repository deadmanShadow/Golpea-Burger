import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navigationbar = () => {
    const {user , logout} = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Container>
           <Navbar className='mt-2' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Golpea <span className='text-danger'>Burger</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="#pricing">Food</Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/blogs">Blogs</Link>
                            </Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Bengali Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Italian Food
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Chinese Food</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Thai and Mexican Food
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex'>
                            {user && <Button variant="secondary"><FaUserCircle/><span className='ms-2'> Profile</span></Button>}
                           
                                {
                                    user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
                                    <Link to="/login">Login</Link>
                                }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigationbar;
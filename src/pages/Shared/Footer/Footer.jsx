import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card>
                <Card.Header className='text-center'>Golpea <span className='text-danger'>Burger</span></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <div>
                            <h4>Contact with us:</h4>
                            <p>Email: golpeaburger@gmail.com <br />
                            Contact Number: 01777777777 <br />
                            Address: 313,D-block, Banani, Dhaka, Bangladesh.
                            </p>
                        </div>
                        <footer className="blockquote-footer">
                            Are you hungry?<cite title="Source Title"> We are here for you!!</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <p className='text-center'><small>Copyright act 2023</small></p>
        </div>
    );
};

export default Footer;
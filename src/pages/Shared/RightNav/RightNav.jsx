import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
                <Button variant="outline-primary"><FaGoogle />  Google</Button>{' '}
                <Button variant="outline-secondary"><FaGithub />  Github</Button>{' '}
                <div className='mt-4'>
                    <h4 className='text-danger'>Find us on</h4>
                    <ListGroup>
                        <ListGroup.Item action variant="primary">< FaFacebook/> Facebook</ListGroup.Item>
                        <ListGroup.Item action variant="secondary"><FaInstagramSquare />
                            Instagram
                        </ListGroup.Item>
                        <ListGroup.Item action variant="warning"><FaTwitter />
                            Twitter
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
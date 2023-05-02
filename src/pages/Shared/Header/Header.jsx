import React from 'react';
import { Button, Carousel, Container,  } from 'react-bootstrap';
import logo from '../../../assets/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.avif'
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProvider';



const Header = () => {

    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="w-100"
                            src={logo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-warning'>Welcome To Golpea Burger</h3>
                            <p className='text-secondary'>Are you hungry? We are always here for you!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className='mt-2'>
                <Button variant="success">Our Food</Button>
                <Marquee speed={100} className='text-success'>
                    The restaurant menu description of the dish should ideally paint a picture to the reader about what the dish looks like, what its texture is, and how it would taste. Words such as vibrant, leafy, encrusted, buttered, etc., lend a luxurious appearance to the dish. Rich, creamy, delicious, tender, sweet, and more give an excellent feel to the dish by mere words.
                </Marquee>
            </Container>
        </div>
    );
};

export default Header;
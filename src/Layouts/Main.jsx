import React from 'react';

import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import FoodCard from '../pages/Shared/FoodCart/FoodCard';
import Navigationbar from '../pages/Shared/NavigationBar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                        <FoodCard></FoodCard>
                    </Col>
                    <Col lg={3}>
                      <RightNav></RightNav>  
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
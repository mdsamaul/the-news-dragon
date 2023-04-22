import moment from 'moment';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import Logo from '../../../assets/logo.png';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const Header = () => {


    return (
        <Container className='pt-5'>
            <div className='text-center'>
                <img src={Logo} alt="" />
                <p className='text-seconndary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover={true} speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
          
        </Container>
    );
};

export default Header;
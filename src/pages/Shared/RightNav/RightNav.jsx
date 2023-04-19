import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import bg from '../../../assets/bg.png';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='my-2  w-100' variant="outline-primary"><FaFacebook /> Login with Google</Button>
                <Button className='px-3 w-100' variant="outline-secondary" ><FaGithub />Login with Github</Button>
            </div>
            <QZone></QZone>
            <div className='bg-secondary py-4 my-4'>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
            <div className='d-block'>

                <div className='position-absolute'>
                    <img src={bg} alt="" />
                </div>
                <div className='position-relative text-center px-4 pt-5 mb-5 pb-2'>
                    <h1 className='text-light fw-bolder py-5 '>Create an Amazing Newspaper</h1>
                    <p className='text-light  pb-2 '>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='text-light fw-semibold py-2 px-4' variant="danger">Learn More</Button>
                </div>

            </div>
        </div>
    );
};

export default RightNav;
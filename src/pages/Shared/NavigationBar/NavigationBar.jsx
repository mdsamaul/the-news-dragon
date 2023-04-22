import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider.jsx';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log(user);

    const handlerLogOut = () => {
        logOut()
            .then(result => { }
            )
            .catch(error => console.log(error)
            )
    }



    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="m-auto">
                        <Link to='/' className='text-decoration-none text-dark fw-semibold px-2' >Home</Link>
                        <Link to='/about' className='text-decoration-none text-dark fw-semibold px-2'>About</Link>
                        <Link to='/career' className='text-decoration-none text-dark fw-semibold px-2'>Career</Link>

                    </Nav>
                    <Nav className="d-flex align-items-center gap-2">

                        {user &&
                            <Link className='text-decoration-none text-dark fw-semibold'> <FaUserCircle /> {user.displayName}</Link>
                        }

                        {user ?
                            <Button variant="secondary"><Link onClick={handlerLogOut} className='text-decoration-none text-white fw-semibold'>Logout</Link></Button> :
                            <Button variant="secondary" ><Link to='/login' className='text-decoration-none text-white fw-semibold' >Login</Link></Button>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
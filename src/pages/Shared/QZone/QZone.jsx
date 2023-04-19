import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const QZone = () => {
    return (
        <div>
            <h4>Find Us On</h4>
            <ListGroup>
                <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>

            </ListGroup>
        </div>
    );
};

export default QZone;
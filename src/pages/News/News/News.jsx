import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsinghts from '../EditorsInsinghts/EditorsInsinghts.jsx';


const News = () => {
    const newsDetails = useLoaderData();
    console.log(newsDetails);
    const { image_url, details, title, category_id } = newsDetails
    return (
        <div>
            <h5 className='py-4'>Dragon News</h5>
            <Card className='p-5'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/categorie/${category_id}`}> <Button variant="danger"><FaArrowLeft /> Go Back</Button></Link>
                </Card.Body>
            </Card>
            <div>
                <EditorsInsinghts></EditorsInsinghts>
            </div>
        </div>
    );
};

export default News;
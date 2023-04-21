import moment from 'moment/moment.js';
import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;
    const { published_date, name, img } = author
    return (
        <Card className=" mt-4">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center px-2'>
                    <div className='d-flex align-items-center gap-3'>
                        <div>
                            <Image style={{ height: "40px", width: "40px" }} src={img} roundedCircle />
                        </div>
                        <div>
                            <div><h6 className='font-semibold mb-1'>{name}</h6></div>
                            <div><small className='text-secondary'>
                                {moment(published_date).format('yyyy-MM-D')}</small></div>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <div>
                            <span><FaRegBookmark style={{ width: "20px", height: "20px", cursor: "pointer" }} /></span>
                        </div>
                        <div>
                            <span><FaShareAlt style={{ width: "20px", height: "20px", cursor: "pointer" }} /></span>
                        </div>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}......<Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='d-flex align-items-center  flex-grow-1 gap-2'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-warning' />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                    />
                    <h6 className='m-0'>{rating?.number}</h6>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <span><FaEye style={{ width: "20px", height: "20px", cursor: "pointer" }} /></span>
                    <h6 className='m-0'>{total_view}</h6>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
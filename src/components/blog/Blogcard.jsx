// components/ProductCard/blog/Blogcard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Blogcard = ({ title, text, date, comments, imageUrl, onReadMore }) => {
    return (
        <Card style={{ width: '100%', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text.substring(0, 100)}...</Card.Text> {/* Truncate text */}
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Comments:</strong> {comments}</p>
                <Button variant="primary" onClick={onReadMore}>Read More</Button>
            </Card.Body>
        </Card>
    );
};

export default Blogcard;

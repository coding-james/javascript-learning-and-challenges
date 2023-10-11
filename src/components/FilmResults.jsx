import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function FilmResults({ imdbID, title, poster, year }) {

    return (

        <Card>
            <Card.Img variant="top" src={poster} alt="Film Poster" className="rounded p-2" />
            <Card.Body>
                <Card.Title>{`${title} (${year})`}</Card.Title>
                <Link to={`/film/${imdbID}`}><Button variant="primary">More Details</Button></Link>
            </Card.Body>
        </Card>
    )
}
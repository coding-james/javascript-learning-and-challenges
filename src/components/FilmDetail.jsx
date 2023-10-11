import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';
import OPEN from './common/film_key.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const FilmDetail = () => {
    const params = useParams();
    console.log("Param:", params);
    const [filmData, setFilmData] = useState("");

    useEffect(() => {
        const GetFilm = () => {
            axios.get("http://www.omdbapi.com/?apikey=" + OPEN.API_KEY + "&i=" + params.imdbID)
                .then(response => {
                    console.log(response.data);
                    setFilmData(response.data);
                });
        }
        GetFilm();
    }, [params]);

    const altText = `Film Post for ${filmData.Title}`;

    return (
        <Container>
            <Row><br></br></Row>
            <Row>
                <Col>
                    <Image src={filmData.Poster} alt={altText}></Image>
                </Col>
                <Col>
                    <h3 className="text-start">{filmData.Title}</h3>
                    <h5 className="text-start">({filmData.Year})</h5>
                    <br></br>
                    <p className="text-start">{filmData.Plot}</p>
                    <br></br>
                    <p className="text-start">Rating: {filmData.Rated}</p>
                    <br></br>
                    <p className="text-start">Genre: {filmData.Genre}</p>
                </Col>
            </Row>
        </Container>
    )
}
import { useState } from 'react';
import axios from 'axios';
import FilmResults from './FilmResults';
import OPEN from './common/film_key.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// http://www.omdbapi.com/

export const FilmSearch = () => {
    const [results, setResults] = useState([]);
    const [filmTitle, setFilmTitle] = useState("");;

    const updateTitle = (e) => {
        e.preventDefault();
        setFilmTitle(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get(`http://www.omdbapi.com/?apikey=${OPEN.API_KEY}&s=${filmTitle}&type=movie&page=1`)
            .then(response => {
                console.log(response.data.Search);
                setResults(response.data.Search);
            });
    };

    return (
        <>
            <div>
                <h2>Search Films</h2>
                <p>Enter the name of the film you are searching for here</p>
                <InputGroup className="mb-3 w-55">
                    <Form.Control type="text" className="" onChange={(e) => updateTitle(e)} />
                    <Button size="lg" onClick={(e) => makeRequest(e)}> Search </Button>
                </InputGroup>
                <Container>

                    <Container className="row row-cols-3 g-2">
                        {
                            results.map(result => (
                                <FilmResults
                                    key={result.imdbID}
                                    poster={result.Poster}
                                    title={result.Title}
                                    year={result.Year}
                                    imdbID={result.imdbID}
                                />
                            ))
                        }
                    </Container>

                </Container>

            </div>
        </>
    );
}
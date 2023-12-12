import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import RomanNumerals from "./challenges/Codewars/6 kyu/roman_no_enconder.js"

export const NumberToRoman = () => {

    const [input, setInput] = useState("submit your number to convert");
    const [result, setResult] = useState("submit to convert");

    const Generate = (e) => {
        e.preventDefault();
        setResult(RomanNumerals(input));
    };

    return (
        <Container className="w-50">
            <br />
            <h3>Convert Number to Roman Numerals</h3>
            <br />

            <InputGroup className="mb-3">
                    <Form.Control type="number" value={input} className="form-control" onChange={(e) => setInput(e.target.value)} />
                    <Button size="lg" onClick={Generate}> Submit </Button>
            </InputGroup>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" readOnly type="text" value={result} className="form-control bg-secondary-subtle"></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}
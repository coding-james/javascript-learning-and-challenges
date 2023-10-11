import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    const increaseFive = () => {
        setCounter(count => count + 5);
    };

    const increaseTen = () => {
        setCounter(count => count + 10);
    };

    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    const decreaseFive = () => {
        if (counter > 4) {
            setCounter(count => count - 5);
        } else {
            setCounter(0);
        }
    };

    const decreaseTen = () => {
        if (counter > 9) {
            setCounter(count => count - 10);
        } else {
            setCounter(0);
        }
    };

    //reset counter 
    const reset = () => {
        setCounter(0)
    }


    return (
        <Container className="w-50">
            <h1>React Counter</h1>
            <Form.Group>
                <Form.Control placeholder={new Intl.NumberFormat().format(counter)} className="w-100 text-end fs-1 my-1" disabled data-testid="counter"/>
                <ButtonGroup className="w-100 my-1">
                    <Button className="btn btn-danger" onClick={decreaseTen}>-10</Button>
                    <Button className="btn btn-danger" onClick={decreaseFive}>-5</Button>
                    <Button className="btn btn-danger" onClick={decrease}>-1</Button>
                    <Button className="btn btn-warning" onClick={reset}>Reset</Button>
                    <Button className="btn btn-success" onClick={increase}>+1</Button>
                    <Button className="btn btn-success" onClick={increaseFive}>+5</Button>
                    <Button className="btn btn-success" onClick={increaseTen}>+10</Button>
                </ButtonGroup>
            </Form.Group>
        </Container>
    );
}
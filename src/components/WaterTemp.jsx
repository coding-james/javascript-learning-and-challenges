import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function WaterTemp() {
    const [hot, setHot] = useState(38);
    const [cold, setCold] = useState(8);
    const [waterTemp, setWaterTemp] = useState(hot - cold);

    //change hot water
    const increaseHot = () => {
        setHot(hot => hot + 1);
        setWaterTemp((hot + 1) - cold);
    };

    const decreaseHot = () => {
        if (hot > 0) {
            setHot(hot => hot - 1);
        }
        setWaterTemp((hot - 1) - cold);
    };

    //change hot water
    const increaseCold = () => {
        setCold(cold => cold + 1);
        setWaterTemp(hot - (cold + 1));
    };

    const decreaseCold = () => {
        setCold(cold => cold - 1);
        setWaterTemp(hot - (cold - 1));
    };

    //reset WaterTemp 
    const reset = () => {
        setHot(38);
        setCold(8);
        setWaterTemp(30);
    }


    return (
        <Container className="w-50">
            <h1>React Water Temperature</h1>
            <Form.Group>
                <Row>
                    <Col><Form.Text>Cold</Form.Text></Col>
                    <Col><Form.Text>Overall</Form.Text></Col>
                    <Col><Form.Text>Hot</Form.Text></Col>
                </Row>
                <Row>
                    <Col><Form.Control placeholder={new Intl.NumberFormat().format(cold)} className="w-100 text-center fs-1 my-1" disabled data-testid="waterTemp" /></Col>
                    <Col><Form.Control placeholder={new Intl.NumberFormat().format(waterTemp)} className="w-100 text-center fs-1 my-1" disabled data-testid="waterTemp" /></Col>
                    <Col><Form.Control placeholder={new Intl.NumberFormat().format(hot)} className="w-100 text-center fs-1 my-1" disabled data-testid="waterTemp" /></Col>
                </Row>

                <ButtonGroup className="w-100 my-1">
                    <Button className="btn btn-primary" onClick={decreaseCold}>-1</Button>
                    <Button className="btn btn-primary" onClick={increaseCold}>+1</Button>
                    <Button className="btn btn-warning" onClick={reset}>Reset</Button>
                    <Button className="btn btn-danger" onClick={decreaseHot}>-1</Button>
                    <Button className="btn btn-danger" onClick={increaseHot}>+1</Button>
                </ButtonGroup>
            </Form.Group>
        </Container>
    );
}
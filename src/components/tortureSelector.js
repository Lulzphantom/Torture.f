import React, { useState, useEffect } from 'react';
import { Container, Col, Button, Row, Input } from 'reactstrap';
import { useSelector } from 'react-redux';

export const TortureSelector = () => {

    const people = useSelector((state) => state.people.list);

    const [isTortureTime, setIsTortureTime] = useState(false);
    const [tortureTime, setTotrureTime] = useState(10);
    const [selected, setSelected] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(people.length > 0 ? false : true);
    }, [people])

    const handleChange = (e) => {
        setTotrureTime(e.target.value);
    };

    const onSubmit = () => {
        setIsTortureTime(true);
        const interval = setInterval(() => {
            setSelected(people[Math.floor(Math.random() * people.length)])
        }, 200);
        setTimeout(() => { clearInterval(interval); setIsTortureTime(false); }, tortureTime * 1000);
    }

    return (
        <React.Fragment>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <span>Disponibles <b className='devf-text'>{people.length}</b> personas para torturar en </span>
                    <Col xs={3} lg={3}>
                        <Input type="number" name="seconds" id="seconds" value={tortureTime} onChange={handleChange} />
                    </Col>
                    <span>segundos</span>
                </Row>
                <Row className='justify-content-center mt-5 mb-5 torture-module'>
                    <span><b>{selected}</b><span role='img' aria-label='emoji'>🔥</span></span>
                </Row>
                <Row>
                    <Button
                        className='devf-color'
                        block
                        disabled={isTortureTime || disabled}
                        onClick={onSubmit}>
                        Torturar
                    </Button>
                </Row>
            </Container>
        </React.Fragment>
    )
}

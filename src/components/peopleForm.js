import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { createPeople } from '../store/actions/peopleActions';

export const PeopleForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const textInput = useRef();

    const handleChange = (e) => {
        setName(e.target.value)
        setIsDisabled(e.target.value.length > 2 ? false : true);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createPeople(name));
        setName('');
        textInput.current.focus();
    }
    return (
        <React.Fragment>
            <Form>
                <FormGroup>
                    <Row  className='align-items-center'>
                        <Label for="peopleName" className="mr-sm-2">Nombre:</Label>
                        <Col >
                        <Input ref={textInput} type="text" name="name" id="peopleName" placeholder="Juanito perez" value={name} onChange={handleChange} />
                        </Col>
                        <Button className='devf-color' onClick={onSubmit} disabled={isDisabled}>Agregar</Button>
                    </Row>
                </FormGroup>
            </Form>
        </React.Fragment>
    )
}

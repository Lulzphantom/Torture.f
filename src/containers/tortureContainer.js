import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PeopleForm } from '../components/peopleForm';
import { PeopleList } from '../components/peopleList';
import { TortureSelector } from '../components/tortureSelector';

export const TortureContainer = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <PeopleForm />
                </Col>

                <Row className='mt-5'>
                    <Col sm={12} md={6} className='text-center'>
                        <PeopleList />
                    </Col>
                    <Col sm={12} md={6} className='d-flex align-items-center mt-5 mb-5'>
                        <TortureSelector />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

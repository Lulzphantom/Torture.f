import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { PeopleItem } from './peopleItem';
import { deletePeople } from '../store/actions/peopleActions';

export const PeopleList = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people.list);

    const handleDelete = (name) => {
        dispatch(deletePeople(name));
    }

    return (
        <React.Fragment>
            <ListGroupItem className='devf-color'>Lista de personas</ListGroupItem>
            <ListGroup className='people-list'>                
                {
                    people.map((value, index) => {
                        return <PeopleItem
                            key={index}
                            name={value}
                            handleDelete={handleDelete}
                        />
                    })
                }
            </ListGroup>
            {
                    people.length === 0 &&
                    <span>No hay personas a torturar, prueba agregar algunas</span>

                }
        </React.Fragment>
    )
}

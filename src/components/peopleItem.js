import React from 'react'
import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const PeopleItem = ({ name, handleDelete }) => {
    
    return (
        <React.Fragment>
            <ListGroupItem
                action
                className='d-flex justify-content-between peopleItem' >
                {name}
                <FontAwesomeIcon onClick={() => handleDelete(name)} className='delete-icon' color='gray' icon={faTrashAlt} />
            </ListGroupItem>
        </React.Fragment>
    )
}
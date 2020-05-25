// outsource dependencies
import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSlidersH, faAlignJustify } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';

export default memo(() => {
    const dispatch = useDispatch();

    const handleMenu = useCallback(() => dispatch({ type: TYPE.META, isOpenMenu: true }), [dispatch]);

    return <div className="panel">
        <ListGroup tag="div" className="panel-menu">
            <ListGroupItem tag="a" href="#" action className="text-grey" onClick={handleMenu}>
                <FontAwesomeIcon icon={faAlignJustify}/>
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faComments} />
                <p>All Chats</p>
            </ListGroupItem>

            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faSlidersH} />
                <p>Edit</p>
            </ListGroupItem>
        </ListGroup>
    </div>;
});

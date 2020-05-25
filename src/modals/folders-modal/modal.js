// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { faTimes, faArrowLeft } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { useModal } from './index';
import { selector } from './reducer';
import { useModal as newFolderUseModal } from '../new-folder-modal/index';

export default memo(() => {
    const { isOpen } = useSelector(selector);
    const { close } = useModal();
    const { open } = newFolderUseModal();

    return <Modal isOpen={isOpen} toggle={close} className="folders-modal">
        <ModalHeader className="position-relative d-flex justify-content-between">
            <div>
                <span onClick={close} className="back" style={{ top: '15px' }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                </span>
                <p className="font-weight-bold pl-4">Folders</p>
                <span className="position-absolute close-buttons" onClick={close}><FontAwesomeIcon icon={faTimes} className="icon"/></span>
            </div>
        </ModalHeader>
        <ModalBody className="px-0">
            <p className="pl-4 mb-3 text-primary">My folders</p>
            <ListGroup>
                <ListGroupItem action className="border-0" onClick={open}>
                    <p className="text-primary">CREATE NEW FOLDER</p>
                </ListGroupItem>
            </ListGroup>
            <div className="my-3 bg-light border-top border-bottom">
                <p className="p-3 text-grey">Create folders for different groups of chats and quickly switch between them.</p>
            </div>
            <p className="mb-3 text-primary pl-4">Recommended folders</p>
            <div className="mb-3 mx-4 d-flex justify-content-between align-items-center">
                <div>
                    <h5>Unread</h5>
                    <p className="text-grey">New messages from all chats.</p>
                </div>
                <Button color="primary" size="sm">ADD</Button>
            </div>
            <div className="mx-4 d-flex justify-content-between align-items-center">
                <div>
                    <h5>Personal</h5>
                    <p className="text-grey">Only messages from personal chats.</p>
                </div>
                <Button color="primary" size="sm">ADD</Button>
            </div>
        </ModalBody>
    </Modal>;
});

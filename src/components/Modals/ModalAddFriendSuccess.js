// ModalAddFriendSuccess.js
import React from 'react';
import {
  Modal,
  Row,
  Col,
  Button
} from 'reactstrap';

const ModalAddFriendSuccess = ({ isOpen, toggleModal, message, background }) => {
  return (
    <>
      <Row>
        <Col md="4">
          <Modal
            className={`modal-dialog-centered modal-${background}`}
            contentClassName={`bg-gradient-${background}`}
            isOpen={isOpen}
            toggle={toggleModal}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={toggleModal}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-3 text-center">
                <i className="ni ni-bell-55 ni-3x" />
                <h4 className="heading mt-4">Success</h4>
                <p>{message}</p>
              </div>
            </div>
            <div className="modal-footer">
              <Button className="btn-white" color="default" type="button" onClick={toggleModal} data-dismiss="modal">
                Ok, Got it
              </Button>
              <Button
                className="text-white ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={toggleModal}
              >
                Close
              </Button>
            </div>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

export default ModalAddFriendSuccess;

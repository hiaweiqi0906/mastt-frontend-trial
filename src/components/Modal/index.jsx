import React from 'react'
import Button from 'components/Button'
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

import './Modal.css'

export default function MasttModal({ 
  show, 
  handleClose, 
  handleAction, 
  children, 
  title, 
  className="size-sm",
  confirmLabel="",
  cancelLabel="Close",
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={className}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button variant="secondary" onClick={handleClose} label={"Close"}>
              {cancelLabel}
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleClose} label={"Sign Up"}>
              {confirmLabel}
            </Button>
          </Col>
        </Row>


      </Modal.Footer>
    </Modal>
  )
}

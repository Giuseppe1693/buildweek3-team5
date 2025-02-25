import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className="bi bi-pencil float-end me-4 mt-2 fs-5 d-block" onClick={handleShow}></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modifica i Campi
          <Form.Control size="sm" type="text" placeholder="Nome" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Cognome" />
          <br />
          <Form.Control size="sm" type="text" placeholder="E-mail" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Username" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Bio" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Titolo" />
          <br />
          <Form.Control size="sm" type="text" placeholder="Citta'" />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
/* "name": "Mario",
  "surname": "Rossi",
  "email": "mario@rossi.it",
  "username": "mario88",
  "bio": "Freelance developer",
  "title": "Full Stack Web Developer",
  "area": "Milan", */

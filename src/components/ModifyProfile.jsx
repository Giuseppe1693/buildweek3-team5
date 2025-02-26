import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  //Stato per dati profilo - State
  const [profile, setProfile] = useState({
    //Profile (stato attuale), setProfile (è lo funzione x aggiornarlo)
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //funzione per aggiornare Dati
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Funzione per salvare i dati
  const handleSave = () => {
    console.log("Dati salvati", profile);
    setShow(false);
  };

  return (
    <>
      <Button variant="" className="bi bi-pencil float-end me-4 mt-2 fs-5 d-block" onClick={handleShow}></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modifica i Campi
          <Form.Control
            size="sm"
            type="text"
            name="name"
            placeholder="Nome"
            value={profile.name}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="surname"
            placeholder="Cognome"
            value={profile.surname}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="email"
            placeholder="E-mail"
            value={profile.email}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="username"
            placeholder="Username"
            value={profile.username}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="bio"
            placeholder="Bio"
            value={profile.bio}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="title"
            placeholder="Titolo"
            value={profile.title}
            onChange={handleChange}
          />
          <br />
          <Form.Control
            size="sm"
            type="text"
            name="area"
            placeholder="Citta'"
            value={profile.area}
            onChange={handleChange}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSave}>
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

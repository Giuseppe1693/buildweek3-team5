import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../redux/actions";

function Example() {
  const myProfile = useSelector((state) => {
    console.log(state);
    return state.myprofile.content;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    image: "",
  });

  useEffect(() => {
    if (myProfile) {
      setProfile({
        name: myProfile.name || "",
        surname: myProfile.surname || "",
        email: myProfile.email || "",
        username: myProfile.username || "",
        bio: myProfile.bio || "",
        title: myProfile.title || "",
        area: myProfile.area || "",
        image: myProfile.image || "",
      });
    }
  }, [myProfile]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //funzione per aggiornare Dati
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }

      const data = await response.json();
      console.log("Dati salvati:", data);
      setShow(false);
    } catch (error) {
      console.error("Errore nel salvataggio dei dati:", error);
    }
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
          <Form.Control
            size="sm"
            type="text"
            name="image"
            placeholder="URL Immagine"
            value={profile.image}
            onChange={handleChange}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" type="submit" onClick={handleSave}>
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

/* import { useEffect, useState } from "react"; */
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../redux/actions";
import { useEffect } from "react";

function Home() {
  /*   const [myProfile, setmyProfile] = useState(null); */
  /* const myProfile = useSelector((state) => state.myProfiley.content); */
  const myProfile = useSelector((state) => {
    console.log(state);
    return state.myprofile.content;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <div className="border rounded my-3 bg-white">
            <div>{myProfile && <img className="copertina" src={myProfile.image} alt="Copertina" />}</div>
            <div className="position-relative">
              {" "}
              <img
                src={myProfile?.image}
                alt="Foto Profilo"
                className="position-absolute rounded-circle ms-3"
                style={{
                  bottom: "-40px",
                  left: "10px",
                  width: "130px",
                  height: "130px",
                  objectFit: "cover",
                  border: "3.5px solid white",
                }}
              />
              <i className="bi bi-pencil float-end me-4 mt-2 fs-5"></i>
            </div>

            <div className="p-4 mt-3">
              <div className="d-flex">
                <h3 className="me-2 fs-4 m-0">
                  {" "}
                  {myProfile?.name} {myProfile?.surname}
                </h3>
                <a
                  href="#"
                  className="rounded-pill border-dashed d-inline-block text-primary text-decoration-none pt-0 ps-2 pe-2 fw-semibold"
                  style={{ border: "1.5px dashed currentColor", fontSize: "0.85rem" }}
                >
                  {" "}
                  <i className="bi bi-patch-check-fill me-1 "></i>
                  Aggiungi badge di verifica
                </a>
              </div>

              <p className="m-0 mt-1 mb-1"> Full Stack Developer</p>

              <div className="d-flex align-items-center">
                <p className="m-0  me-1 text-muted" style={{ fontSize: "0.9rem" }}>
                  {myProfile && myProfile.area}
                </p>

                <a href="#" className="text-decoration-none ms-1 fw-semibold" style={{ fontSize: "0.9rem" }}>
                  Informazioni di contatto
                </a>
              </div>
              <a href="#" className="text-decoration-none fw-semibold" style={{ fontSize: "0.9rem" }}>
                100 collegamenti
              </a>

              <div className="d-flex flex-wrap gap-2 mt-2">
                <Button className="rounded-pill bg-text-primary btn-sm ps-3 pe-3 flex-grow-1 flex-md-grow-0">
                  Disponibile per
                </Button>
                <Button variant="outline-primary" className="rounded-pill btn-sm ps-3 pe-3 flex-grow-1 flex-md-grow-0">
                  Aggiungi sezione del profilo
                </Button>
                <Button variant="outline-primary" className="rounded-pill btn-sm ps-3 pe-3 flex-grow-1 flex-md-grow-0">
                  Migliora profilo
                </Button>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill btn-sm ps-3 pe-3 flex-grow-1 flex-md-grow-0"
                >
                  Risorse
                </Button>
              </div>
            </div>
          </div>
          {/* SEZIONE ANALISI */}
          <div className="border rounded my-3 p-4  bg-white">
            <h5 className="m-0">Analisi</h5>
            <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
              {" "}
              <i className="bi bi-eye-fill me-1"></i>
              Solo per te
            </p>

            <div className="row">
              <div className="col-12 col-sm-4 d-flex align-items-center mt-2">
                <i className="bi bi-people-fill fs-5 me-3"></i>
                <div>
                  <p className="mb-0 fw-bold">10 visualizzazioni del profilo</p>
                  <p className="mb-0">Scopri chi ha visitato il tuo profilo.</p>
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center mt-2">
                <i className="bi bi-people-fill fs-5 me-3"></i>
                <div>
                  <p className="mb-0 fw-bold">10 impressioni del post</p>
                  <p className="mb-0">Scopri chi sta interagendo con i tuoi post.</p>
                </div>
              </div>

              <div className="col-12 col-sm-4 d-flex align-items-center mt-2">
                <i className="bi bi-people-fill fs-5 me-3"></i>
                <div>
                  <p className="mb-0 fw-bold">10 comparse nei motori di ricerca</p>
                  <p className="mb-0">Vedi quante volte compari nei risultati di ricerca.</p>
                </div>
              </div>
            </div>
          </div>
          {/* SEZIONE IN PRIMO PIANO*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">In primo piano</h5>
              <div className="d-flex align-items-center">
                <i className="bi bi-plus me-3" style={{ fontSize: "2rem" }}></i>
                <i className="bi bi-pencil fs-5"></i>
              </div>
            </div>

            <div className="p-2 mt-3 border rounded">
              <p className="text-muted" style={{ fontSize: "0.7rem" }}>
                Pubblica
              </p>
            </div>
          </div>
          {/* SEZIONE ATTIVITA'*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Attività</h5>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-primary btn-sm rounded-pill me-3">Crea un post</button>
                <i className="bi bi-pencil fs-5"></i>
              </div>
            </div>
            <p className="text-primary m-0" style={{ fontSize: "0.9rem" }}>
              100 follower
            </p>
            <div className="d-flex mt-3">
              <button className="btn btn-success btn-sm rounded-pill me-2">Post</button>
              <button className="btn btn-outline-secondary btn-sm rounded-pill me-2">Commenti</button>
              <button className="btn btn-outline-secondary btn-sm rounded-pill">Documenti</button>
            </div>

            <div className="p-2 mt-3 border rounded w-auto">
              <p>QUA VA INSERITO IL POST</p>
            </div>
          </div>
          {/* SEZIONE ESPERIENZA*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Esperienza</h5>
              <div className="d-flex align-items-center">
                <i className="bi bi-plus me-3" style={{ fontSize: "2rem" }}></i>
                <i className="bi bi-pencil fs-5"></i>
              </div>
            </div>

            <div className="d-flex align-items-start p-2 mt-3  pb-4 border-bottom">
              <img
                src="https://www.albertobregani.com/wp-content/uploads/2019/05/sdqh8051_bdm_ritratto_bn_nocorn-840x840.jpg"
                alt="Work"
                className="me-3"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />

              <div>
                <p className="m-0 fw-bold" style={{ fontSize: "1rem" }}>
                  Nome Lavoro
                </p>
                <p className="m-0" style={{ fontSize: "0.85rem" }}>
                  Luogo Lavoro
                </p>
                <p className="m-0 text-secondary" style={{ fontSize: "0.85rem" }}>
                  Data Lavoro
                </p>
                <p className="m-0 text-secondary" style={{ fontSize: "0.85rem" }}>
                  Sede Lavoro
                </p>
              </div>
            </div>
          </div>
          {/* SEZIONE FORMAZIONE*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Formazione</h5>
              <div className="d-flex align-items-center">
                <i className="bi bi-plus me-3" style={{ fontSize: "2rem" }}></i>
                <i className="bi bi-pencil fs-5"></i>
              </div>
            </div>

            <div className="d-flex align-items-start p-2 mt-3  pb-4 border-bottom">
              <img
                src="https://www.albertobregani.com/wp-content/uploads/2019/05/sdqh8051_bdm_ritratto_bn_nocorn-840x840.jpg"
                alt="Work"
                className="me-3"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />

              <div>
                <p className="m-0 fw-bold" style={{ fontSize: "1rem" }}>
                  Nome Formazione
                </p>
                <p className="m-0" style={{ fontSize: "0.85rem" }}>
                  Luogo Formazione
                </p>
                <p className="m-0 text-secondary" style={{ fontSize: "0.85rem" }}>
                  Data Formazione
                </p>
              </div>
            </div>
          </div>
          {/* SEZIONE COMPETENZE*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Competenze</h5>
              <div className="d-flex align-items-center">
                <i className="bi bi-plus me-3" style={{ fontSize: "2rem" }}></i>
                <i className="bi bi-pencil fs-5"></i>
              </div>
            </div>

            <div className="d-flex align-items-start p-2 mt-3  pb-4 border-bottom"></div>
          </div>
          {/* SEZIONE INTERESSI*/}
          <div className="border rounded my-3 p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="m-0">Interessi</h5>
            </div>

            <ul className="nav nav-tabs mt-3" style={{ borderBottom: "2px solid #ddd" }}>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="aziende-tab"
                  data-bs-toggle="tab"
                  href="#aziende"
                  style={{ color: "#01754F", borderBottom: "2px solid #01754F" }}
                >
                  Aziende
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="gruppi-tab"
                  data-bs-toggle="tab"
                  href="#gruppi"
                  style={{ color: "#212529", borderBottom: "none" }}
                >
                  Gruppi
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="scuole-tab"
                  data-bs-toggle="tab"
                  href="#scuole"
                  style={{ color: "#212529", borderBottom: "none" }}
                >
                  Scuole o università
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-start p-2 mt-3  pb-4 border-bottom"></div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <div className="border rounded m-3 p-4 bg-white">
            <div className="d-flex justify-content-between">
              <div>
                <b>Lingua del profilo</b>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  italiano
                </p>
              </div>
              <div className="ms-auto">
                <i className="bi bi-pencil"></i>
              </div>
            </div>

            <div className="border-top pt-3 d-flex justify-content-between">
              <div>
                <b>Profilo pubblico e URL</b>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  www.Link/profilo/linkedin
                </p>
              </div>
              <div className="ms-auto">
                <i className="bi bi-pencil"></i>
              </div>
            </div>
          </div>

          <div className="border rounded m-3 bg-white p-4 small">
            <h5 className="m-0" style={{ fontSize: "1rem" }}>
              Altre visualizzazioni
            </h5>
            <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
              <i className="bi bi-eye-fill me-1"></i>
              Solo per te
            </p>
            <div className="d-flex align-items-start pb-4 border-bottom">
              <img
                src="https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg"
                alt="Profile"
                className="rounded-circle me-1 img-fluid"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  Nome Cognome
                </p>
                <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                  Lavoro
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill btn-sm flex-grow-1 flex-md-grow-0"
                  style={{ width: "100px" }}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-start pt-3 mt-3 pb-4 border-bottom">
              <img
                src="https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg"
                alt="Profile"
                className="rounded-circle me-1 img-fluid"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  Nome Cognome
                </p>
                <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                  Lavoro
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill btn-sm flex-grow-1 flex-md-grow-0"
                  style={{ width: "100px" }}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Collegati
                </Button>
              </div>
            </div>
          </div>

          <div className="border rounded m-3 bg-white p-4 small">
            <h5 className="m-0" style={{ fontSize: "1rem" }}>
              Persone che potresti conoscere
            </h5>
            <p className="text-secondary mb-0" style={{ fontSize: "0.9rem" }}>
              Dalla tua scuola o università
            </p>

            <div className="d-flex align-items-start pt-3 pb-4 border-bottom">
              <img
                src="https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg"
                alt="Profile"
                className="rounded-circle me-1 img-fluid"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  Nome Cognome
                </p>
                <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                  Lavoro
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill btn-sm flex-grow-1 flex-md-grow-0"
                  style={{ width: "100px" }}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Collegati
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-start pt-3 mt-3 pb-4 border-bottom">
              <img
                src="https://cdn.calciomercato.com/images/2019-05/Whatsapp.senza.immagine.2019.1400x840.jpg"
                alt="Profile"
                className="rounded-circle me-1 img-fluid"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <div>
                <p className="m-0" style={{ fontSize: "1rem" }}>
                  Nome Cognome
                </p>
                <p className="mb-2" style={{ fontSize: "0.85rem" }}>
                  Lavoro
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill btn-sm flex-grow-1 flex-md-grow-0"
                  style={{ width: "100px" }}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Collegati
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

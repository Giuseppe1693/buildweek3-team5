import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {
  const [myProfile, setmyProfile] = useState(null);

  const headers = new Headers({
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc",
  });

  const fillProfilePage = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers,
      });
      if (response.ok) {
        let data = await response.json();
        setmyProfile(data);
      } else {
        throw new Error("Error in fetching ");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillProfilePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(myProfile);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="border rounded my-3 bg-white">
            <div>{myProfile && <img className="copertina" src={myProfile.image} alt="Copertina" />}</div>
            <div className="position-relative">
              {" "}
              <img
                src={myProfile.image}
                alt="Foto Profilo"
                className="position-absolute rounded-circle"
                style={{
                  bottom: "-30px",
                  left: "10px",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="p-4 mt-3">
              <div className="d-flex">
                <h3 className="me-2 fs-4 m-0">
                  {" "}
                  {myProfile.name} {myProfile.surname}
                </h3>
                <a
                  href="#"
                  className="rounded-pill border-dashed d-inline-block text-primary text-decoration-none pt-0 ps-2 pe-2"
                  style={{ border: "1.5px dashed currentColor", fontSize: "0.85rem" }}
                >
                  {" "}
                  <i className="bi bi-patch-check-fill me-1"></i>
                  Aggiungi badge di verifica
                </a>
              </div>

              <p className="m-0 mt-1 mb-1">???</p>

              <div className="d-flex align-items-center">
                <p className="m-0  me-1 text-muted" style={{ fontSize: "0.9rem" }}>
                  {myProfile && myProfile.area}
                </p>

                <a href="#" className="text-decoration-none ms-1 " style={{ fontSize: "0.9rem" }}>
                  Informazioni di contatto
                </a>
              </div>
              <a href="#" className="text-decoration-none" style={{ fontSize: "0.9rem" }}>
                collegamenti
              </a>

              <div className="d-flex mt-2">
                <Button className="rounded-pill bg-text-primary me-2 btn-sm">Disponibile per</Button>
                <Button variant="outline-primary rounded-pill me-2 btn-sm">Aggiungi sezione del profilo</Button>
                <Button variant="outline-primary rounded-pill me-2 btn-sm">Migliora profilo</Button>
                <Button variant="outline-secondary" className="rounded-circle rounded-pill btn-sm">
                  Risorse
                </Button>
              </div>
            </div>
          </div>
          {/* SEZIONE ANALISI */}
          <section className="border rounded my-3 p-4  bg-white">
            <h5>Analisi</h5>
            <span className="text-secondary" style={{ fontSize: "0.9rem" }}>
              {" "}
              <i className="bi bi-eye-fill me-1"></i>
              Solo per te
            </span>

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
          </section>
        </Col>
        <Col md={4}>
          <div className="border rounded m-3 bg-white">
            <div className="p-4">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

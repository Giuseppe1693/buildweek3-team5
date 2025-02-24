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
          <div className="border rounded my-3 ">
            <div>
              <img className="copertina" src={myProfile.image} alt="Copertina" />
            </div>
            <div>Foto profilo</div>
            <div className="p-4 mt-3">
              <div className="d-flex justify-content-between">
                <h3>
                  {myProfile.name} {myProfile.surname}
                </h3>
                <span>
                  <i className="bi bi-pencil"></i>
                </span>
              </div>
              <Button variant="outline-primary" className="rounded-pill border-dashed">
                Aggiungi badge di verifica
              </Button>
              <p>{myProfile.bio}</p>

              <p>{myProfile.area}</p>
              <p>{myProfile.email}</p>
              <div className="d-flex ">
                <Button className="rounded-pill bg-text-primary px-5 mx-1">Disponibile per</Button>
                <Button variant="outline-primary rounded-pill mx-1">Aggiungi sezione del profilo</Button>
                <Button variant="outline-primary rounded-pill mx-1">Migliora profilo</Button>
                <Button variant="outline-secondary " className="mx-2 rounded-circle rounded-pill mx-1">
                  Risorse
                </Button>

                {/* <i className="bi bi-three-dots"></i> */}
              </div>
            </div>
          </div>
          {/* SEZIONE ANALISI */}
          <section className="border rounded my-3 ">
            <h4>Analisi</h4>
            <span className="text-secondary ">Solo per te</span>
          </section>
        </Col>
        <Col md={4}>
          <div className="border rounded m-3">
            <div className="p-4">
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <b>Lingua del profilo</b>
                  </span>
                  <p>italiano</p>
                </div>
                <div>
                  <i className="bi bi-pencil"></i>
                </div>
              </div>
              <div className="border-top pt-3 d-flex justify-content-between">
                <div>
                  <span>
                    <b>Profilo pubblico e URL</b>
                  </span>
                  <p>www.Link/profilo/linkedin</p>
                </div>
                <div>
                  <i className="bi bi-pencil"></i>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div> {/* ? footer */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

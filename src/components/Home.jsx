import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="border rounded my-3 ">
            <div>
              <img
                className="copertina"
                src="https://images.unsplash.com/photo-1739996698574-30dfcdaa64b8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Copertina"
              />
            </div>
            <div>Foto profilo</div>
            <div className="p-4 mt-3">
              <div className="d-flex justify-content-between">
                <h3>Nome Cognome</h3>
                <span>
                  <i className="bi bi-pencil"></i>
                </span>
              </div>
              <Button variant="outline-primary" className="rounded-pill border-dashed">
                Aggiungi badge di verifica
              </Button>
              <p>ruolo</p>
              <p>corso</p>
              <p>località</p>
              <p>localitàcollegamenti</p>
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

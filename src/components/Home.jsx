import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="border rounded my-3 ">
            <div>IMG</div>
            <div>Foto profilo</div>
            <div className=" p-4 mt-3">
              <h3>Nome Cognome</h3>
              <span>Aggiungu badge di verifica</span>
              <span>ruolo</span>
              <p>corso</p>
              <p>località</p>
              <p>localitàcollegamenti</p>
              <Button>Disponibile per</Button>
              <div className="my-2">
                <Button variant="outline-primary">Aggiungi sezione del profilo</Button>
                <Button className="mx-2">icon kebab</Button>
              </div>
              <Button variant="outline-primary">Migliora profilo</Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="border rounded m-3">
            <div>
              <div>
                <div className="d-flex">
                  <span>
                    <b>Lingua del profilo</b>
                  </span>
                  <span>italiano</span>
                </div>
                <div>penna</div>
              </div>
              <div className="border-top ">
                <div className="d-flex">
                  <span>
                    <b>Profilo pubblico e URL</b>
                  </span>
                  <span></span>
                </div>
                <div>penna</div>
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

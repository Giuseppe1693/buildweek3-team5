import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <div className="border rounded my-2">
            <div>img</div>
            <div>
              <h1>nome bla bla</h1>
              <p>loco lav</p>
              <p>fda</p>
              <p>fdadsfwef</p>
            </div>
          </div>
          <div className="border my-2">
            <p>Visitatori del profilo</p>
            <p>Visualizza tutte le analisi</p>
          </div>
          <div className="border my-2">
            <p>Fai crescere il tuo business con Premium Business</p>
            <p> Prova per 0 EUR</p>
          </div>
          <div className="border my-2">
            <ul>
              <li>Elementi salvati</li>
              <li>Gruppi</li>
              <li>Eventi</li>
            </ul>
          </div>
        </Col>
        <Col md={8}>
          <div></div>
          <div></div>
        </Col>
        <Col md={2}>
          <div></div>
          <div></div>
          <div></div>
          <div></div> {/* ? footer */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

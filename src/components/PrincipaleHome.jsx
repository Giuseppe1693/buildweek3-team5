import { Col, Container, Row } from "react-bootstrap";

function PrincipaleHome() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          {/* SEZIONE DI SINISTRA */}
          <Col className="col-3">
            <section className="border-radius bg-white ">
              <div>
                <img
                  className="copertina"
                  src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Copertina"
                  style={{ height: "75px" }}
                />
              </div>
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Foto Profilo"
                  className="position-absolute rounded-circle ms-3"
                  style={{
                    bottom: "-40px",
                    left: "10px",
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    border: "3.5px solid white",
                  }}
                />
              </div>
              <div className="gap-px px-2 pb-2 mt-5">
                <h6>Nome Cognome</h6>
                <p>Pippo, Dirigente. Milan.</p>
                <p>San Siro, Milano.</p>
                <p>Corso Motivatore Aggressive</p>
              </div>
            </section>
            <section className="border rounded bg-white my-3">
              <ul className="list-unstyled small p-3">
                <li className="d-flex justify-content-between">
                  <a className="text-decoration-none small fw-bold text-dark" href="#">
                    Visualizzatori del profilo
                  </a>
                  <span>7</span>
                </li>
                <li>
                  <a className="text-decoration-none small fw-bold text-dark" href="#">
                    Visualizza tutte le analisi
                  </a>
                </li>
              </ul>
            </section>
            <section className="border rounded bg-white my-3">
              <h6 className="text-secondary small">Ottieni 4 volte più visualizzazioni del profilo con Premium </h6>
            </section>
          </Col>
          {/* SEZIONE CENTRALE */}
          <Col className="col-5 ">
            <section className="border-radius bg-white">
              <div className="d-flex ">
                <div className="d-flex align-item-center my-3 mx-5">
                  <div className="border rounded-circle">img pro</div>
                  <input type="text" placeholder="Crea un post" className="border rounded-pill bg-white my-3 mx-3" />
                </div>
              </div>
              <div className="d-flex justify-content-around pb-3 text-secondary">
                <span>
                  <b>
                    <a href="#" className=" text-secondary link-underline link-underline-opacity-0">
                      <i className="bi bi-play-btn-fill text-success mx-2 "></i>
                      Video
                    </a>
                  </b>
                </span>
                <span>
                  <a href="#" className=" text-secondary link-underline link-underline-opacity-0">
                    <i className="bi bi-card-image text-primary mx-2"></i>
                    <b>Foto</b>
                  </a>
                </span>
                <span>
                  <a href="#" className=" text-secondary link-underline link-underline-opacity-0">
                    <i className="bi bi-menu-button-wide-fill text-warning"></i>
                    <b>Scrivi un articolo</b>
                  </a>
                </span>
              </div>
            </section>
            <div className="d-flex justify-content-around">
              <hr className="text-dark px-5" />
              <span className="text-secondary">
                Seleziona le visualizzazione del feed:{" "}
                <b className="text-dark">
                  Più rilevanti per primi<i className="bi bi-caret-down-fill"></i>
                </b>
              </span>
            </div>
            {/* SEZIONE NOTIZIE */}
          </Col>
          {/* SEZIONE DESTRA */}
          <Col className="col-4">
            <section>
              <div className="border rounded bg-white px-2 ">
                <div className="d-flex justify-content-between mt-3">
                  <h5>
                    <b>In primo piano</b>
                  </h5>
                  <span>
                    <a href="#">
                      <i className="bi bi-info-square-fill text-dark"></i>
                    </a>
                  </span>
                </div>
                <span className="text-secondary">a cura di Linkedin Notizie</span>
                <div>
                  <ul className="list-unstyled mt-2">
                    <li>
                      <h6>Stipendi più bassi per le donne</h6>
                      <span className="text-secondary">1 giorno fa • 438 lettori</span>
                    </li>
                    <li>
                      <h6>Cosa succede alla Milano Fashion Week</h6>
                      <span className="text-secondary">1 ora fa • 164 lettori</span>
                    </li>
                    <li>
                      <h6>Incertezza e malcontento tra gli italiani</h6>
                      <span className="text-secondary">16 ore fa • 160 lettori</span>
                    </li>
                    <li>
                      <h6>Dioniso riappare a Pompei</h6>
                      <span className="text-secondary">17 ore fa</span>
                    </li>
                    <li>
                      <h6>Un igloo di Zara a Verbier</h6>
                      <span className="text-secondary">16 ore fa</span>
                    </li>
                    <li>
                      <span>
                        Vedi altro
                        <i className="bi bi-chevron-compact-down mx-2 text-dark"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <main>
                <header className="border rounded my-3 bg-white">
                  <div>
                    <img
                      className="copertina"
                      src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Copertina"
                      style={{ height: "75px" }}
                    />
                  </div>
                  <div className="position-relative">
                    <img
                      src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Foto Profilo"
                      className="position-absolute rounded-circle ms-3"
                      style={{
                        bottom: "-40px",
                        left: "10px",
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        border: "3.5px solid white",
                      }}
                    />
                  </div>
                  <div className="gap-px px-2 pb-2 mt-5">
                    <h6>Nome Azienda</h6>
                    <p>
                      Pippo, rimani al corrente su tutte le nostre ultime notizie! Ci saranno grandi novità
                      prossimamente
                    </p>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-primary rounded-pill mt-1 mx-2 h-[32px] px-5 d-flex justify-content-center"
                    >
                      Segui
                    </a>
                  </div>
                </header>
              </main>
              <aside className="border rounded bg-white ">
                <div className="d-flex align-items-center my-2 p-2 ">
                  <div className="px-1">
                    <div className="rounded " style={{ background: "pink" }}>
                      SUGGERIMENTO
                    </div>
                  </div>
                  <div>Prova LinkedIn sull’app per Windows</div>
                </div>
              </aside>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PrincipaleHome;

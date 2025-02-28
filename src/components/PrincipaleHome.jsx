import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../redux/actions";
import SezioneNotizie from "./SezioneNotizie";

function PrincipaleHome() {
  const myProfile = useSelector((state) => {
    console.log(state);
    return state.myprofile.content;
  });

  const dispatch = useDispatch();
  const [newPostText, setNewPostText] = useState(""); //Stato per la gestione del nuovo post

  useEffect(() => {
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreatePost = async () => {
    try {
      const authorizationCode =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc"; //Recupero del token
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorizationCode}`, //è per rendere sicuro il codice di autorizzazione
        },
        body: JSON.stringify({ text: newPostText }),
      });
      if (response.ok) {
        document.dispatchEvent(new Event("postsUpdated"));
      }
      // setNewPostText("");
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
      alert("Errore durante la creazione del post"); //Alert di avviso non postato
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          {/* SEZIONE DI SINISTRA */}
          <Col className="col-3">
            <section className="border-radius bg-white ">
              <div>
                <a href="/Profile">
                  <img className="copertina" src={myProfile.image} alt="Copertina" style={{ height: "75px" }} />
                </a>
              </div>
              <div className="position-relative">
                <a href="/Profile">
                  <img
                    src={myProfile.image}
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
                </a>
              </div>
              <div className="gap-px px-4 pb-2 mt-5">
                <h6>
                  {myProfile?.name} {myProfile?.surname}
                </h6>
                <p>Pippo, Dirigente. Milan.</p>
                <p>San Siro, Milano.</p>
                <p>Corso Motivatore Aggressive</p>
              </div>
            </section>
            {/* SEZIONE 2: Visitatore */}
            <section className="border rounded bg-white my-3">
              <ul className="list-unstyled small p-3 px-4">
                <li className="d-flex justify-content-between">
                  <a className="text-decoration-none small fw-bold text-dark" href="#">
                    Visualizzatori del profilo
                  </a>
                  <span>7</span>
                </li>
                <li className="pt-2">
                  <a className="text-decoration-none small fw-bold text-dark" href="#">
                    Visualizza tutte le analisi
                  </a>
                </li>
              </ul>
            </section>
            {/* SEZIONE 3 */}
            <section className="border rounded bg-white my-3 p-3 px-4">
              <h6 className="text-secondary small">Ottieni 4 volte più visualizzazioni del profilo con Premium </h6>
              <div className="d-flex ">
                <span>
                  <img
                    src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="logo mini"
                    style={{ height: "15px", width: "15px" }}
                  />
                </span>
                <span>
                  <b className="small px-1">Prova per 0 EUR</b>
                </span>
              </div>
            </section>
            {/* SEZIONE 4: Elementi,etc */}
            <section className="border rounded bg-white p-3 px-4">
              <ul className="list-unstyled small">
                <li>
                  <a href="#" className="text-decoration-none small text-dark">
                    <p>
                      <i className="bi bi-bookmark-fill"></i>
                      <span className="px-1">
                        <b>Elementi salvati</b>
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none small text-dark">
                    <p>
                      <i className="bi bi-people-fill"></i>
                      <span className="px-1">
                        <b>Gruppi</b>
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none small text-dark">
                    <p>
                      <i className="bi bi-newspaper"></i>
                      <span className="px-1">
                        <b>Newsletter</b>
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none small text-dark">
                    <p>
                      <i className="bi bi-calendar4"></i>
                      <span className="px-1">
                        <b>Eventi</b>
                      </span>
                    </p>
                  </a>
                </li>
              </ul>
            </section>
          </Col>
          {/* SEZIONE CENTRALE */}
          <Col className="col-5 ">
            <section className="border-radius bg-white">
              <div className="d-flex">
                <div className="d-flex align-item-center my-3 mx-5">
                  <a href="/Profile">
                    <img
                      className="border rounded-circle"
                      src={myProfile.image}
                      alt="Foto profilo"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        border: "3.5px solid white",
                      }}
                    />
                  </a>
                  {/* <div className="border rounded-circle">img pro</div> */}
                  <input
                    type="text"
                    placeholder="Crea un post"
                    className="border rounded-pill bg-white my-3 mx-4 px-5"
                    style={{ border: "1px solid black" }}
                    value={newPostText} //Aggiunge valore
                    onChange={(e) => setNewPostText(e.target.value)} //Aggiungi onChange
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCreatePost();
                      }
                    }}
                  />
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
            <div className="d-flex justify-content-around my-2">
              <hr className="text-dark px-5" />
              <span className="text-secondary">
                Seleziona le visualizzazione del feed:{" "}
                <b className="text-dark">
                  Più rilevanti per primi<i className="bi bi-caret-down-fill"></i>
                </b>
              </span>
            </div>
            {/* SEZIONE NOTIZIE */}
            <section>
              <SezioneNotizie />
            </section>
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

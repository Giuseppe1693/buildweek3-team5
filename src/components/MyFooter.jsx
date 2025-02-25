import { Container } from "react-bootstrap";

function MyFooter() {
  return (
    <Container>
      <footer className="d-flex justify-content-between flex-wrap mt-5">
        <div className="d-flex gap-5 me-5 flex-wrap">
          <div className="footer-grid">
            <div className="footer-column">
              <ul className="list-unstyled small">
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold ">
                    Informazioni
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Informativa sulla community <br /> professionale
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Privacy e condizioni
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Sales Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Centro sicurezza
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <ul className="list-unstyled small">
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Accessibilità
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Carriera
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Opzioni per gli annunci pubblicitari
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Mobile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <ul className="list-unstyled small">
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Centro assistenza
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Soluzioni di marketing
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Pubblicità
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary link-primary text-decoration-none small fw-bold">
                    Piccole imprese
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 " style={{ flexGrow: 1 }}>
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-question-circle-fill text-muted fs-5"></i>
            <div>
              <a
                href="#"
                className="text-secondary link-primary text-decoration-none small fw-bold"
                style={{ fontSize: "13px" }}
              >
                Domande?
              </a>
              <p className="text-muted mb-0" style={{ fontSize: "12.25px" }}>
                Visita il nostro centro assistenza
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-gear-fill text-muted fs-5"></i>
            <div>
              <a
                href="#"
                className="text-secondary link-primary text-decoration-none small fw-bold"
                style={{ fontSize: "13px" }}
              >
                Gestisci il tuo account e la tua privacy
              </a>
              <p className="text-muted  mb-0" style={{ fontSize: "12.25px" }}>
                Vai alle impostazioni
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-shield-shaded text-muted fs-5"></i>
            <div>
              <a
                href="#"
                className="text-secondary link-primary text-decoration-none small fw-bold"
                style={{ fontSize: "13px" }}
              >
                Trasparenza sui contenuti consigliati
              </a>
              <p className="text-muted  mb-0" style={{ fontSize: "12.25px" }}>
                Scopri di più sui contenuti consigliati.
              </p>
            </div>
          </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div>
            <label
              htmlFor="languageSelect"
              className="text-secondary link-primary text-decoration-none small fw-bold"
              style={{
                fontSize: "12.25px",
                display: "block",
                width: "300px",
              }}
            >
              Seleziona lingua
            </label>

            <select id="languageSelect" className="form-select text-secondary fs-bold" style={{ fontSize: "12.25px" }}>
              <option value="it">Italiano (Italiano)</option>
              <option value="en">English (inglese)</option>
              <option value="es">Español (spagnolo)</option>
            </select>
          </div>
        </div>
      </footer>
      <p className="small text-secondary" style={{ fontSize: "12.25px" }}>
        Linkedin Corporation © 2025
      </p>
    </Container>
  );
}

export default MyFooter;

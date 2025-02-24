function MyFooter() {
  return (
    <footer className="d-flex">
      <div>
        <div className="d-flex  m-auto">
          <div className="footer-grid">
            <div className="footer-column">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Informazioni
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Informativa sulla community professionale
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Privacy e condizioni
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Sales Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  >
                    Centro sicurezza
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Accessibilità
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Carriera
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Mobile
                </a>
              </li>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Centro assistenza
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Pubblicità
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Piccole imprese
                </a>
              </li>
            </div>
          </div>
        </div>

        <p>
          {/* <img
          src="https://www.citypng.com/public/uploads/preview/hd-linkedin-official-logo-transparent-background-701751694779193uxxevujc5p.png"
          alt="logo Linkedin"
          width={50}
        /> */}
          Linkedin Corporation © 2025
        </p>
      </div>
      <div className="col-6">
        <div>
          <div className="d-flex">
            <div>
              <i className="bi bi-question-circle-fill"></i>
            </div>
            <div>
              <a
                href="#"
                className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                <b>Domande?</b>
              </a>
              <p>Visita il nostro centro assistenza</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <i className="bi bi-gear-fill"></i>
            </div>
            <div>
              <a
                href="#"
                className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                <b>Gestisci il tuo account e la tua privacy</b>
              </a>
              <p>Vai alle impostazioni</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <i className="bi bi-shield-shaded"></i>
            </div>
            <div>
              <a
                href="#"
                className="text-secondary link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                <b>Trasparenza sui contenuti consigliati</b>
              </a>
              <p>Scopri di più sui contenuti consigliati.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;

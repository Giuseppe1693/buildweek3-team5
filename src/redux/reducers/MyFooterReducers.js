/* import { ADD_LINK } from "../actions/footerActions";

// Stato iniziale
//NOTA:Attualmente la voce "url" non contiene nessun link di collegamento, ma semplicemente un "#".
const initialState = {
  links: [
    { id: 1, title: "Informazioni", url: "https://about.linkedin.com/it-it" }, //Indirizzo url originale Linkedin, sezione "Informazioni".
    {
      id: 2,
      title: "Informativa sulla community professionale",
      url: "https://it.linkedin.com/legal/professional-community-policies?", //Indirizzo url originale Linkedin, sezione "Informativa sulla community professionale".
    },
    { id: 3, title: "Privacy e condizioni", url: "#" }, //Qui c'è un DropDown.
    {
      id: 4,
      title: "Sales Solutions",
      url: "https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer",
    }, //Indirizzo url originale Linkedin, sezione "Sales Solutions".
    { id: 5, title: "Centro sicurezza", url: "https://about.linkedin.com/transparency" }, //Indirizzo url originale Linkedin, sezione "Centro sicurezza".
    { id: 6, title: "Accessibilità", url: "https://it.linkedin.com/accessibility?" }, //Indirizzo url originale Linkedin, sezione "Accessibilità".
    { id: 7, title: "Carriera", url: "https://careers.linkedin.com/" }, //Indirizzo url originale Linkedin, sezione "Carriera".
    {
      id: 8,
      title: "Opzioni per gli annunci pubblicitari",
      url: "https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it",
    }, //Indirizzo url originale Linkedin, sezione "Opzioni per gli annunci pubblicitari".
    { id: 9, title: "Mobile", url: "https://mobile.linkedin.com/it-it" }, //Indirizzo url originale Linkedin, sezione "Mobile".
    { id: 10, title: "Centro assistenza", url: "#" }, //  !!! ATTENZIONE !!! -- NESSUN LINK
    {
      id: 11,
      title: "Soluzioni di marketing",
      url: "https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer",
    }, //Indirizzo url originale Linkedin, sezione "Soluzioni di marketing".
    { id: 12, title: "Pubblicità", url: "https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f" }, //Indirizzo url originale Linkedin, sezione "Pubblicità".
    { id: 13, title: "Piccole imprese", url: "https://business.linkedin.com/small-business?&src=li-footer" }, //Indirizzo url originale Linkedin, sezione "Piccole imprese".
  ],
};

// Reducer per gestire le azioni del footer
const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        ...state,
        links: [...state.links, action.payload], // Aggiunge un nuovo link
      };
    default:
      return state;
  }
};

export default footerReducer;
 */

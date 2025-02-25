import { Container, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

function MyNavbar() {
  const myProfile = useSelector((state) => {
    console.log(state);
    return state.myprofile.content;
  });
  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#">
            <img src="../src/assets/2048px-LinkedIn_icon.svg.png" alt="logo" height={40} />
          </Navbar.Brand>
          <Form className="d-flex me-3">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-search"></i>
              </span>
              <Form.Control
                type="search"
                placeholder="Cerca"
                className="border-0 bg-light"
                aria-label="Search"
                style={{ width: "150px", height: "35px" }}
              />
            </div>
          </Form>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center gap-4 navbarScroll">
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none p-0 "
            >
              <i className="bi bi-house-door-fill fs-5"></i>
              <span style={{ fontSize: "0.75rem" }}>Home</span>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none p-0 "
            >
              <i className="bi bi-person-lines-fill fs-5"></i>
              <span style={{ fontSize: "0.75rem" }}>Rete</span>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none p-0 "
            >
              <i className="bi bi-briefcase-fill fs-5"></i>
              <span style={{ fontSize: "0.75rem" }}>Lavoro</span>
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none p-0 "
            >
              <i className="bi bi-chat-dots-fill fs-5"></i>
              <span style={{ fontSize: "0.75rem" }}>Messaggistica</span>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className="d-flex flex-column align-items-center text-secondary text-decoration-none p-0 "
            >
              <i className="bi bi-bell-fill fs-5"></i>
              <span style={{ fontSize: "0.75rem" }}>Notifiche</span>
            </Nav.Link>

            <NavDropdown
              id="navbarScrollingDropdown"
              className="p-0"
              title={
                <img
                  src={myProfile.image}
                  alt="profile"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              }
            >
              <NavDropdown.Item href="#action6">Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="../src/assets/2048px-LinkedIn_icon.svg.png" alt="logo" height={40} />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <a href="" className="d-flex flex-column text-secondary text-decoration-none align-item-center">
                <i className="bi bi-house-door-fill text-center"></i>
                <span>Home</span>
              </a>
            </Nav.Link>
            <Nav.Link href="#action2">
              <a href="" className="d-flex flex-column text-secondary text-decoration-none align-item-center">
                <i className="bi bi-person-lines-fill text-center"></i>
                <span>Rete</span>
              </a>
            </Nav.Link>
            <Nav.Link href="#action2">
              <a href="" className="d-flex flex-column text-secondary text-decoration-none align-item-center">
                <i className="bi bi-briefcase-fill text-center "></i>
                <span>Lavoro</span>
              </a>
            </Nav.Link>
            <Nav.Link href="#action2">
              <a href="" className="d-flex flex-column text-secondary text-decoration-none align-item-center">
                <i className="bi bi-chat-right-dots-fill text-center"></i>
                <span>Messaggistica</span>
              </a>
            </Nav.Link>
            <Nav.Link href="#action2">
              <a href="" className="d-flex flex-column text-secondary text-decoration-none align-item-center">
                <i className="bi bi-bell-fill text-center"></i>
                <span>Notifiche</span>
              </a>
            </Nav.Link>
            <NavDropdown
              title={
                <span>
                  <img src="" alt="icon" width={20} height={20}></img>
                </span>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

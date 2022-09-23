import 'animate.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/photos/logo.png';
import './index.css';

function OffcanvasExample() {



    return (
        <>
            {['md'].map((expand) => (
                <Navbar collapseOnSelect key={expand} bg="white" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand id="name" href="home">
                            <img src={logo} alt="Sunset Social Club Logo" id="logo" />
                            <header id="name">Sunset Social Club</header>
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggle mt-1" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Sunset Social Club
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="offcanvas-body mt-4">
                                <Nav className="justify-content-end flex-grow-1 pe-3 mb-4">
                                    <Nav.Link className="navlinks" href="#home">Home</Nav.Link>
                                    <Nav.Link className="navlinks" href="#posters">Posters</Nav.Link>
                                    <Nav.Link className="navlinks" href="#services">Services</Nav.Link>
                                    <Nav.Link className="navlinks" href="#contactus">Contact Us</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
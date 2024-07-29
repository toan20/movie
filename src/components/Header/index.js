import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="/">Movie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link href="#link">Phim lẻ</Nav.Link>
                        <Nav.Link href="#link">Phim bộ</Nav.Link>
                        <NavDropdown title="Quốc gia" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Việt Nam</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hàn Quốc</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Thái Lan</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Tìm kiếm"
                                className="me-2 bg-dark border border-secondary  "
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

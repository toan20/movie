import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=${query}`);
            if (response.data.items) {
                navigate(`/movie/${response.data.items[0].slug}`); // Điều hướng đến trang chi tiết phim
            } else {
                alert('Không tìm thấy phim nào');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="/">Movie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/movie">
                            Trang chủ
                        </Nav.Link>
                        <Nav.Link as={Link} to="/phimle">
                            Phim lẻ
                        </Nav.Link>
                        <Nav.Link href="#link">Phim bộ</Nav.Link>
                        <NavDropdown title="Quốc gia" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Việt Nam</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hàn Quốc</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Thái Lan</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex" onSubmit={handleSearch}>
                            <Form.Control
                                type="search"
                                placeholder="Tìm kiếm"
                                className="me-2  border border-secondary  "
                                aria-label="Search"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <Button type="submit" variant="outline-success">
                                Search
                            </Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

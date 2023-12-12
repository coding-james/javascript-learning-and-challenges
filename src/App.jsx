import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import Counter from './components/Counter.jsx';
import { FilmSearch } from './components/FilmSearch.jsx';
import { FilmDetail } from './components/FilmDetail.jsx';
import { NumberToRoman } from './components/NumberToRoman.jsx';

function App() {
  return (
    <Router>
      <Navbar className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>JavaScript Examples</Navbar.Brand>

          <Nav>
            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/counter" className="nav-link">Counter</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/film-search" className="nav-link">Film Search</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/number-to-roman" className="nav-link">Convert to Roman</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/film-search" element={<FilmSearch />} />
                <Route path="/film/:imdbID" element={<FilmDetail />} />
                <Route path="/number-to-roman" element={<NumberToRoman />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App

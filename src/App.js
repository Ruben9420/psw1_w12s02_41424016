import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Facilities from './components/Facilities';
import Teachers from './components/Teachers';
import VisiMisi from './components/VisiMisi';
import Home from './components/Home'; // Add this if you have a Home component
import Navbar from 'react-bootstrap/Navbar'; // Import Navbar from react-bootstrap
import Container from 'react-bootstrap/Container'; // Import Container from react-bootstrap
import Nav from 'react-bootstrap/Nav'; // Import Nav from react-bootstrap

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SMA BUDHAYA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/facilities">Facilities</Nav.Link>
            <Nav.Link href="/teachers">Teachers</Nav.Link>
            <Nav.Link href="/visimisi">Visi Misi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/visimisi" element={<VisiMisi />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';  // CSS untuk home

const Home = () => {
  return (
    <div className="home-background">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="text-center py-5">
          <h1 className="display-3 text-white">Selamat Datang di SMA Budhaya</h1>
          <p className="lead text-white">
            Kami menawarkan pendidikan berkualitas dengan lingkungan sekolah yang dinamis untuk menumbuhkan generasi muda yang siap menghadapi masa depan.
          </p>
          <Button variant="primary" size="lg" href="/register">
            Bergabunglah Sekarang
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Tentang SMA Budhaya</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="school-values.jpg" />
              <Card.Body>
                <Card.Title>Nilai Kami</Card.Title>
                <Card.Text>
                  Di SMA Budhaya, kami menekankan integritas, disiplin, dan inovasi dalam pendidikan.
                </Card.Text>
                <Button variant="outline-primary" href="/visimisi">Pelajari Lebih Lanjut</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="school-facilities.jpg" />
              <Card.Body>
                <Card.Title>Fasilitas Kami</Card.Title>
                <Card.Text>
                  Kami menyediakan fasilitas yang canggih untuk kegiatan akademik dan ekstrakurikuler.
                </Card.Text>
                <Button variant="outline-primary" href="/facilities">Jelajahi Fasilitas</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-lg mb-4">
              <Card.Img variant="top" src="school-achievements.jpg" />
              <Card.Body>
                <Card.Title>Prestasi Kami</Card.Title>
                <Card.Text>
                  SMA Budhaya memiliki sejarah yang membanggakan dalam prestasi akademik dan ekstrakurikuler.
                </Card.Text>
                <Button variant="outline-primary" href="/about">Pelajari Lebih Lanjut</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* School Image Section */}
      <Container>
        <div className="text-center py-5">
          <img
            src="school-building.jpg"
            alt="Gedung Sekolah"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;

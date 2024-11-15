// File: Facilities.js
import React from 'react';
import './Facilities.css';

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2 className="title">Fasilitas di SMA Budhaya</h2>
      <p className="description">SMA Budhaya dilengkapi dengan fasilitas modern yang mendukung proses pembelajaran dan perkembangan siswa:</p>
      <div className="facility-item">
        <img src="classroom.jpg" alt="Ruang Kelas" className="facility-image" />
        <h4>Ruang Kelas yang Luas</h4>
        <p>Ruang kelas yang nyaman dan luas mendukung proses pembelajaran yang efektif.</p>
      </div>
      <div className="facility-item">
        <img src="lab.jpg" alt="Laboratorium" className="facility-image" />
        <h4>Laboratorium Modern</h4>
        <p>Laboratorium yang lengkap untuk mendukung pembelajaran sains dan teknologi.</p>
      </div>
      <div className="facility-item">
        <img src="library.jpg" alt="Perpustakaan" className="facility-image" />
        <h4>Perpustakaan yang Lengkap</h4>
        <p>Perpustakaan yang menyediakan berbagai sumber belajar untuk mendukung penelitian dan studi.</p>
      </div>
      <div className="facility-item">
        <img src="sports.jpg" alt="Fasilitas Olahraga" className="facility-image" />
        <h4>Fasilitas Olahraga</h4>
        <p>Fasilitas olahraga yang lengkap, mulai dari lapangan sepak bola hingga gym untuk mendukung kegiatan ekstrakurikuler.</p>
      </div>
      <div className="facility-item">
        <img src="art-music.jpg" alt="Ruang Seni dan Musik" className="facility-image" />
        <h4>Ruang Seni dan Musik</h4>
        <p>Fasilitas ruang seni dan musik yang memungkinkan siswa untuk mengeksplorasi kreativitas mereka.</p>
      </div>
    </div>
  );
};

export default Facilities;

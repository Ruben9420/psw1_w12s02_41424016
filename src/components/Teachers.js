import React from 'react';
import './Teachers.css';

const Teachers = () => {
  return (
    <div className="teachers-container">
      <h2 className="title">Guru di SMA Budhaya</h2>
      <p className="description">Kami memiliki pengajaran yang berkualitas dengan para guru yang berkompeten di bidangnya.</p>
      {/* Daftar Guru */}
      <div className="teacher-item">
        <h4>Guru Matematika</h4>
        <p>Dengan pengalaman lebih dari 10 tahun mengajar.</p>
      </div>
      <div className="teacher-item">
        <h4>Guru Bahasa Indonesia</h4>
        <p>Mengajarkan bahasa Indonesia dengan metode yang interaktif dan kreatif.</p>
      </div>
    </div>
  );
};

export default Teachers;

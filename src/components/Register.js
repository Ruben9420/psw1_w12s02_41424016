import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Akun berhasil dibuat!');
  };

  return (
    <div className="register-container">
      <h2 className="title">Daftar Akun Baru</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama lengkap"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi"
          />
        </div>
        <button type="submit" className="register-button">Daftar</button>
      </form>
    </div>
  );
};

export default Register;

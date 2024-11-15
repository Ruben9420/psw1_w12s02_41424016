import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Anda berhasil masuk!');
  };

  return (
    <div className="login-container">
      <h2 className="title">Masuk ke Akun Anda</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="login-button">Masuk</button>
      </form>
    </div>
  );
};

export default Login;

// src/pages/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('irawanade142@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [showPassword, setShowPassword] = useState(false); // State untuk show/hide password
  const [error, setError] = useState(''); // State untuk pesan kesalahan

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tentukan kredensial yang benar
    const correctEmail = "irawanade142@gmail.com";
    const correctPassword = "12345678";

    // Validasi email dan password
    if (email === correctEmail && password === correctPassword) {
      const userData = { email, password };
      onLogin(userData); // Memanggil fungsi onLogin dari App.jsx
      setError(''); // Bersihkan pesan kesalahan jika berhasil
    } else {
      setError('Email atau password salah'); // Tampilkan pesan kesalahan
    }
  };

  return (
    <div className="login-container">
      <h2>VOCA <span>Task</span></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <div className="password-input-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/* Tampilkan pesan kesalahan */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

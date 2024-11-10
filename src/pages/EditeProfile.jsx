import React, { useState } from 'react';
import { FaUser, FaArrowLeft } from 'react-icons/fa'; // Tambahkan FaArrowLeft untuk tombol back
import { useNavigate } from 'react-router-dom'; // Tambahkan useNavigate untuk navigasi

const EditProfile = ({ user, onUpdateProfile }) => {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
  const [imageUrl, setImageUrl] = useState(user.profileImage || '');
  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah submit form default

    const updatedProfile = {
      profileImage: imageUrl,
      username,
      email,
      password,
    };

    onUpdateProfile(updatedProfile);
    setPassword('');
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya dalam riwayat browser
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-page">
        {/* Tombol Back */}
        <div className="back-button" onClick={handleBack}>
          <FaArrowLeft size={20} className="back-icon" />
        </div>

        {/* Profil Icon */}
        <div className="profile-icon mb-4">
          <FaUser size={50} className="text-white mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">
          {/* Profile Image URL */}
          <div className="form-group">
            <label>Profile Image URL:</label>
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="input"
            />
          </div>

          {/* Username */}
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              disabled
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>

          {/* Button Save Changes */}
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

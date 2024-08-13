import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import the CSS file

function Profile({ user, onClose, onUpdateProfile }) {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [musicType, setMusicType] = useState(user.musicType);
  const [details, setDetails] = useState(user.details);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleUpdate = () => {
    onUpdateProfile({ name, email, gender, musicType, details, profileImage });
    setEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    navigate("/");
    onClose();
  };

  return (
    <div className="profile-modal-overlay" onClick={handleClose}>
      <div
        className="profile-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {editing ? (
          <div>
            <h2>Edit Profile</h2>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                id="profileImage"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image-preview"
                />
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="musicType" className="form-label">
                Music Type
              </label>
              <input
                type="text"
                id="musicType"
                className="form-control"
                value={musicType}
                onChange={(e) => setMusicType(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">
                Details
              </label>
              <textarea
                id="details"
                className="form-control"
                rows="3"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpdate}>
              Save Changes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h2>Profile</h2>
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image-preview"
              />
            )}
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Music Type:</strong> {user.musicType}
            </p>
            <p>
              <strong>Details:</strong> {user.details}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;

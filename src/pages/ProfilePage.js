import React from "react";
import profileImage from "../assets/profile.png";
import cameraIcon from "../assets/camera.png";

function ProfilePage() {
  return (
    <div className="mobile-screen">

      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-content">

        <div className="profile-info">

          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="profile"
              className="profile-image"
            />

            <div className="camera-icon">
              <img
                src={cameraIcon}
                alt="camera"
              />
            </div>
          </div>

          <div className="profile-details">
            <h4>Marry Doe</h4>
            <p>Marry@Gamil.com</p>
          </div>

        </div>

        <p className="profile-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </div>
  );
}

export default ProfilePage;
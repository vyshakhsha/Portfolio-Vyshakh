import React from "react";
import { ProfileData } from "../Data/Data";

function Profile() {
  return (
    <div className="profile-container">
      <h2>Find Me Online</h2>
      <div className="profile">
        {ProfileData.map((profile, index) => (
          <div className="profile-item" key={index}>
            <img
              className="profile-img"
              src={profile.imageUrl}
              alt="logo"
            />
            <div className="profile-details">
              <button
                  onClick={() => window.open(profile.url, "_blank")}
                  className="btn-credential"
                > Goto {profile.name}
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;

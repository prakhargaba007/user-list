import React, { useRef, useState } from "react";
import UserModal from "./UserModal";

const UsersList = ({ users }) => {
  const dialog = useRef();
  const [selectedUser, setSelectedUser] = useState(null);

  function showModal(user) {
    setSelectedUser(user);
    if (dialog.current) {
      dialog.current.open();
    }
  }

  function handleImageError(event) {
    event.target.src =
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png";
  }

  return (
    <>
      <UserModal ref={dialog} user={selectedUser} onError={handleImageError} />
      <div className="infoContainer">
        {users.map((user) => (
          <div onClick={() => showModal(user)} className="info" key={user.id}>
            <img
              src={user.avatar}
              alt="avatar"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="info-text">
              <h3>
                {user.profile.firstName} {user.profile.lastName}
              </h3>
              <p>{user.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;

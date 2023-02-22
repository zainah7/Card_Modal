import React from "react";
import "../Card/Card";
import "../Modal/modal.css";

const Modal = ({ profile, setIsOpen }) => {
  const { name, description, profilePic } = profile[0];
  console.log(profilePic);
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <img src={profilePic} alt="profile" />
          <h3>{name}</h3>
          {description.map((desc) => (
            <p>{desc}</p>
          ))}
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </>
  );
};
export default Modal;

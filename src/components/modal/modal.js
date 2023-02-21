import React from "react";
import Card from "../card/card";
import './card.css'

const modal = ({ name, profilePic, description, id }) => {
  return (
    <div>
      <button
        className="profBtn"
        data-bs-target={`detail{id}`}
        data-bs-toggle="modal"
      >
        Click to view profile
      </button>

      <div id={`detail{id}`} className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <img
                  className="img profilePic"
                  src={profilePic}
                  alt="profile pics"
                />
              </div>
              <div className="descr">
                <p className="name"> {name}</p>
                <ul className="description">
                  <li>{description[0]}</li>
                  <li>{description[1]}</li>
                  <li>{description[2]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default modal;

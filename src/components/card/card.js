import "./card.css";
import Modal from "../Modal/modal";


const Card = ({ name, profilePic, handleDelete, id, description }) => {
  return (
    <div className="col-lg-3 mb-2">
      <div className="card">
        <div className="close" onClick={() => handleDelete(id)}>
          X
        </div>
        <div>
          <img className="img profilePic" src={profilePic} alt="profile pic" />
        </div>
        <div className="descr">
          <p className="name"> {name}</p>

          <button
            className="profBtn"
            data-bs-target={`detail${id}`}
            data-bs-toggle="modal"
          >
            Click to view profile
          </button>
          {/* <button className="profileBtn"> Click to view profile</button> */}
          {/* <Modal
            profilePic={profilePic}
            name={name}
            description={description}
            id={id}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

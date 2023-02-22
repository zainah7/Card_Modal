import "./card.css";


const Card = ({ name, profilePic, handleDelete, id, detailsModal }) => {

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
            onClick={() => detailsModal(id)}
          >
            Click to view profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

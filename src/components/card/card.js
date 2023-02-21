import "./card.css";
import modal from "./modal/modal";

const Card = ({ name, profilePic, handleDelete, id, description }) => {
  return (
    <div className="col-lg-3 mb-2">
      <div className="card">
        <div className="close" onClick={() => handleDelete(id)}>
          X
        </div>
        <div>
          <img
            className="img profilePic"
            src={profilePic}
            alt="profile pic"
          />
        </div>
        <div className="descr">
          <p className="name"> {name}</p>
          {/* <button className="profileBtn"> Click to view profile</button> */}
          <modal
            profilePic={profilePic}
            name={name}
            description={description}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const DogDetail = ({ history, dog }) => {
  const { src, name, age, facts } = dog;

  return (
    <div className="card mb-6">
      <div className="card-image">
        <img className="image" src={src} alt={name} />
      </div>
      <div className="card-content">
        <p className="title">{name}</p>
        <p className="subtitle">{age} years old</p>
        <ul className="panel">
          {facts.map((li, i) => (
            <li className="panel-block" key={i}>
              {li}
            </li>
          ))}
        </ul>
      </div>
      <button className="button is-info mb-5" onClick={history.goBack}>
        Go Back
      </button>
    </div>
  );
};

export default DogDetail;

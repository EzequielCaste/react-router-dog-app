import React from "react";
import { Link } from "react-router-dom";

const DogList = (props) => {
  const dogComponents = props.dogs.map((dog) => (
    <div className="Dog column">
      <img alt={dog.name} src={dog.src} />
      <Link className="underline" to={`/dogs/${dog.name}`}>
        <div className="title is-size-5 has-text-centered">{dog.name}</div>
      </Link>
    </div>
  ));

  return (
    <div className="container is-max-desktop">
      <h1 className="title has-text-centered">Dog Shelter</h1>
      <div className="columns">{dogComponents}</div>
    </div>
  );
};

export default DogList;

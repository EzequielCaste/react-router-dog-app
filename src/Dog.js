import React from "react";
import { Link } from "react-router-dom";

const Dog = (props) => {
  console.log(props);
  const { name, age, src, facts } = props;

  return (
    <div className="Dog">
      <Link to={`/${name}`}>
        <img src={src} alt="a cute dog" />
        <p className="Dog-name">{name}</p>
      </Link>
    </div>
  );
};

export default Dog;

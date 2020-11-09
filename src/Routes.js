import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";

const Routes = ({ dogs }) => {
  const getDog = (prop) => {
    const { name } = prop.match.params;
    const currentDog = dogs.filter((dog) => dog.name === name)[0];

    return <DogDetail {...prop} dog={currentDog} />;
  };
  return (
    <Switch>
      <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
      <Route exact path="/dogs/:name" render={getDog} />
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;

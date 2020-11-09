import React from "react";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";

import "./styles.css";

import Navbar from "./Navbar";
import Routes from "./Routes";

export default function App({ dogs }) {
  return (
    <>
      <Navbar dogs={dogs} />
      <div className="container">
        <Routes dogs={dogs} />
      </div>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
};

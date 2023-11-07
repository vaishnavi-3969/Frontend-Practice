import React from "react";
import { ReactDOM } from "react-dom";


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "luna",
      breed: "mavanese",
    }),
    React.createElement(Pet, {
      animal: "bird",
      name: "pepper",
      breed: "cockatiel",
    }),
    React.createElement(Pet, {
      animal: "cat",
      name: "doink",
      breed: "mixed",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

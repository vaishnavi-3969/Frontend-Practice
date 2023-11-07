import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path="/" element={<SearchParams/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        {/* <SearchParams /> */}
        {/* <Pet name="luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="doink" animal="cat" breed="mixed" /> */}
      </div>
    </BrowserRouter>
  );
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "dog",
  //     name: "luna",
  //     breed: "mavanese",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "bird",
  //     name: "pepper",
  //     breed: "cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "cat",
  //     name: "doink",
  //     breed: "mixed",
  //   }),
  // ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);

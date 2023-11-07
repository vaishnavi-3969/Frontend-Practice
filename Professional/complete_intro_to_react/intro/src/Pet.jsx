// import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h1", {}, props.animal),
//       React.createElement("h1", {}, props.breed),
//     ]);
//   };
import { Link } from "react-router-dom";
const Pet = ({name,animal,breed,images, location, id}) => {
    let hero="http://pets-images.dev-apis.com/pets/none.jpg"
    if(images.length){
        hero=images[0];
    }
  return (
    // <div>
    //     <h1>{props.name}</h1>
    //     <h1>{props.animal}</h1>
    //     <h1>{props.breed}</h1>
    // </div>
    <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
            <img src={hero} alt={name}/>
        </div>
        <div className="info">
            <h1>{name}</h1>
            <h2>{`${animal}-${breed}-${location}`}</h2>
        </div>
    </Link>
  );
};
export default Pet;

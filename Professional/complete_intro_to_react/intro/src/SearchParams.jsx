import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// ===============================================
// import { useEffect, useState } from "react";
// // import Pet from "./Pet";
// import useBreedList from "./useBreedList";
// import Results from "./Results";
// // let counter = 0;
// import { useQuery } from "@tanstack/react-query";
// import fetchSearch from "./fetchSearch";

// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const SearchParams = () => {
//   const [requestParams, setRequestParams] = useState({
//     location: "",
//     animal: "",
//     breed: "",
//   });

//     const [animal, setAnimal] = useState("");
//   //   const [location, setLocation] = useState("");
//     // const [breed, setBreed] = useState("");
//     const [breeds] = useBreedList(animal);
//   //   const [pets, setPets] = useState([]);
//   const results = useQuery(["search", requestParams], fetchSearch);
//   const pets = results?.data.pets ?? [];

//   //   counter++;
//   //   const locationHook = useState("");
//   //   const location = locationHook[0];
//   //   const setLocation = locationHook[1];
//   //   useEffect(() => {
//   //     requestPets();
//   //   }, []);

//   //   async function requestPets() {
//   //     const res = await fetch(
//   //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
//   //     );
//   //     const json = await res.json();
//   //     setPets(json.pets);
//   //   }

//   return (
//     <div className="search-params">
//       {/* <div>{counter}</div> */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//         //   requestPets();
//           const formData = new FormData(e.target);
//           const obj = {
//             animal: formData.get("animal") ?? "",
//             breed: formData.get("breed") ?? "",
//             location: formData.get("location") ?? "",
//           };
//           setRequestParams(obj);
//         }}
//       >
//         <label htmlFor="location">
//           Location
//           <input
//             // onChange={(e) => setLocation(e.target.value)}
//             id="location"
//             name="location"
//             // value={location}
//             placeholder="Location"
//           />
//         </label>
//         <label htmlFor="animal">
//           Animal
//           {/* <select
//             onChange={(e) => {
//               setAnimal(e.target.value);
//               //   setBreed("");
//             }}
//             id="animal"
//             value={animal}
//           > */}
//           <select
//             id="animal"
//             name="animal"
//             onChange={(e) => {
//               setAnimal(e.target.value);
//             }}
//             onBlur={(e) => {
//               setAnimal(e.target.value);
//             }}
//           >
//           <option/>
//             {/* <option key="select option">(select option)</option> */}
//             {ANIMALS.map((animal) => (
//               <option key={animal} value={animal}>{animal}</option>
//             ))}
//           </select>
//         </label>
//         <label htmlFor="breed">
//           Breed
//           <select
//             disabled={!breeds.length === 0}
//             // onChange={(e) => setBreed(e.target.value)}
//             id="breed"
//             // value={breed}
//             name="breed"
//           >
//             <option />
//             {breeds.map((breed) => (
//               <option key={breed} value={breed}>{breed}</option>
//             ))}
//           </select>
//         </label>
//         <button>Submit</button>
//       </form>
//       {/* {pets.map((pet) => (
//         <Pet
//           name={pet.name}
//           animal={pet.animal}
//           breed={pet.breed}
//           key={pet.id}
//         />
//       ))} */}
//       <Results pets={pets} />
//     </div>
//   );
// };
// export default SearchParams;

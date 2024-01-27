import React, { Component, useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Button from './components/Button';
import Support from './components/Support';
import ListCast from './components/ListCast';



function App() {
  const name = "StarGazers";
  let [memberInfo, setMemberInfo] = useState(null)

  return (
    <div className='container'>
      <article>
        <hgroup>
          <img src="group.svg" alt="StarGazers Group" />
          <Welcome name={name}/>
          <p>Members of an
            <b> intergalactic alliance </b>
            paving the way for peace and benevolence
            among all species.
            They are known for their enthusiasm for
            science, for their love of fun, and their
            dedication to education
          </p>
        {
          memberInfo &&
          <article>
            <hgroup>
              <h1>{memberInfo.name}</h1>
              <h2>{memberInfo.title}</h2>
              <p>{memberInfo.description}</p>
              <Button text="Learn More"/>
            </hgroup>
          </article>
        }
        </hgroup>
      </article>
      <ListCast/>
      <Support/>
    </div>
  );
}

export default App;

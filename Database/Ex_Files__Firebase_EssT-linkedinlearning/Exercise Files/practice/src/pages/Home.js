import React, { useState } from 'react';

const Home = ({ auth, setAuth }) => {

    return (
        <div>
        {
          auth ? (
            <div>
              <h1>Authenticated</h1>
            </div>
          ) : <h1>Not Authenticated</h1>
        }
      </div>
    );
};

export default Home;



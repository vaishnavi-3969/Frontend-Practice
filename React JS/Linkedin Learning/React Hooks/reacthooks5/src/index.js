import React, { createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';
// import { useInput } from './useInput';
// import App from './App';

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  )
  if (loading) return <h1>loading...</h1>
  if (error)
    return (
      <pre>
        {JSON.stringify(error, null, 2)}
      </pre>
    )
  return (
    <div style={{backgroundColor:'#ddddf4'}}>
      {/* {JSON.stringify(data, null, 2)} */}
      <img style={{borderRadius:'50%'}} src={data.avatar_url} alt={data.login} />
      <h1>{data.login}</h1>
      <h2>{data.name}</h2>
      <p>{data.location}</p>
      <p>{data.bio}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App login={`vaishnavi-3969`} />
);






import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  function loadData (){
    fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then(setData);
  }

  useEffect(() =>{
      loadData()
  },[])

  if(!data){
    return <div>Loading...</div>
  }else{
    return (
      <div>
        <ul>
        {
          data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))
        }
      </ul>
      <button onClick={() => setData([])}>Remove data</button>
      <button onClick={loadData}>Reload Data</button>
      </div>
    )
  }
 
}

export default App;

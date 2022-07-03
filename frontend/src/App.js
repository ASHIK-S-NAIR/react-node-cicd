import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [userName, setUserName] = useState('');

  // const proxy = "http://localhost:5000"
  const proxy = "http://139.59.83.154:5000"

  const getNames = async () => {
    const response = await axios.get(`${proxy}/name`);
    console.log("Response", response);

    setUserName(response.data);
  }

  useEffect(() => {
    getNames();
  }, [])
  return (
    <div className="App">
     <h1>My website is {userName}</h1>
     <h3>My name is {userName}</h3>
    </div>
  );
}

export default App;

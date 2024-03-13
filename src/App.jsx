import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  let [things, setThings] = useState([]);

  useEffect(() => {
    axios
      .get('/stuff')
      .then((res) => {
        setThings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Hello there!</h1>
      {things.map((thing) => {
        return <p>{thing.name}</p>;
      })}
    </>
  );
}

export default App;

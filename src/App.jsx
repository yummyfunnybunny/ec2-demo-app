import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get('/stuff')
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Hello there!</h1>
      {arr.map((num) => {
        return <p>{num}</p>;
      })}
    </>
  );
}

export default App;

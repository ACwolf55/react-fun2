import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import axios from 'axios'

function App() {

  const [num,setNum] = useState(100)
  const [arr, setarr] = useState([1,2,6,5,7])

  return (
    <div className="App">
    <p>REAct Is FUUNNNN!N!N!N@$N%#$N%#$!</p>

    <p>8*8</p>
    <p>{8*8}</p>
   <SearchBar name={'value'} num={num}/>
    </div>
  );
}

export default App;

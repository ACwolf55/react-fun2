import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'

function App() {
//State  / variables

const [x,y] = useState(z)

const [name, setname] = useState('dog') 

const [x, setx] = useState(5)

//functions
const changeName=()=>{
  setname('cat')
}

  return (
    <div className="App">
     <p>dog</p>
     <p>cat</p>
     <p>{name}</p> 
     <p>8*8</p>
     <button onClick={changeName}>changenmame</button>
     <Menu AppName={name} x={x} />
     <Menu/>
    </div>
  );
}

export default App;

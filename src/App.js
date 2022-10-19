import React, { useEffect, useState } from "react";
import { DashBoard } from "./DashBoard";



function App() {

 const [arr,setArr] = useState(['red','blue','yellow'])
 const [num,setNum] = useState(5)
 conts [loading,setLoading] = useState(true)
 

  







  return (
    <div className="App">
      
    <header> HELLO </header>

    <DashBoard arr={arr} num={num} jetplane={0} lding={loading}/>
     

    </div>  
  );
}

export default App;

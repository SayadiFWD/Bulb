import React, { useState } from "react";
import "./App.css";




const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";



function App() {
  const [bulb, setBulb] = useState(true);

  setTimeout(() => {
    setBulb(!bulb);
  }, 1000);

  // if(bulb){
  //   return <div className="App"><h1>The light is ON</h1></div>
  // }

  // return <div className="App-header"><h1>The light is Off</h1></div>


  return <div className="App">  {bulb ? <img src={yellow}/> : <img src={white}/>}</div>;
}

export default App;

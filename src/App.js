import React ,{useState}from "react"
import './App.css';

function App() {
  const [bulb,setBulb]=useState(true)

  setTimeout(()=>{
    setBulb(!bulb)
  },1000)


if(bulb){
  return <div className="App"><h1>The light is ON</h1></div>
}

return <div className="App-header"><h1>The light is Off</h1></div>

 
}

export default App;

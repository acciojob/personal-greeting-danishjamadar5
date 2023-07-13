
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  function change(e) {
    // setName("Hello "+ e.target.value + "!");
    setName(`Hello ${e.target.value}!`);
  }



  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input type="text" onChange={change} />
      <p>{name}</p>
    </div>
  )
}

export default App

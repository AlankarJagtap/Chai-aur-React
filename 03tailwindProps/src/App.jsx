import { useState } from "react";
import React from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Cardd";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <button className="bg-blue-500 text-white mb-4 ">
        <h1 className="bg-green-400 text-black p-4 rounded-xl">
          Tailwind test
        </h1>
      </button>
      <Card usernames="Alankar" />
      <Card usernames="Jagtap"/>

      

    </>

 

    
  );
}

export default App;

import { useState } from "react";
import React from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <button className="bg-blue-500 text-white mb-4 ">
        <h1 className="bg-green-400 text-black p-4 rounded-xl">
          Tailwind test
        </h1>
      </button>

      <div id ="01"
        className="flex flex-col rounded-xl  p-2 "
        style={{
          border: "0.88px solid",

          backdropFilter: "saturate(180%) blur(14px)",
          background: " #ffffff0d",
        }}
      >
        <div >
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="350"
            height="350"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>

    </>

 

    
  );
}

export default App;

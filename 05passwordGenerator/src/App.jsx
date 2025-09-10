import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3) // to select only some value
    window.navigator.clipboard.writeText(password)
  }, [password])



  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-emerald-500 bg-gray-700">
        <h1 className="text-white text-center py-2 "><i><b>PASSWORD GENERATOR !</b></i> </h1>
        <div className="flex shadow rounded-full overflow-hidden mb-4 py-5 px-5 " style={{backgroundColor:"MistyRose"}}>
          <input 
          type="text" 
          value={password}
          className="ouline-none w-full py-3 px-3 bg-amber-50"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className="px-6 py-2 bg-blue-500 text-white font-bold  shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-xl">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 py-3 ">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={40}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;

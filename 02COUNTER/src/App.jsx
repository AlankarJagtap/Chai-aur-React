import { useState } from 'react'

function App() {
  const [Counter, setCounter] = useState(15);

  function addOne() {
    
    setCounter((prev) => prev + 1);
    console.log(Counter)
  }

  function subOne() {
    if(Counter<=0){
      return
    }
    setCounter((prev) => prev - 1);
  }
  return (
    <>
      <h1>HEllo everynyana</h1>
      <br />

      <h2>Counter value:{Counter}</h2>
      <button onClick={addOne}>Click to ADD: {Counter}</button>
      <button onClick={subOne}>Click to REMOVE</button>
      <h2>Counter value:{Counter}</h2>
    </>
  );
}

export default App;

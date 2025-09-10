import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [inputValue, setinputValue] = useState("");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2">         {/*user defined colors*/}
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <p>Want to add a color?</p>
          <input
            type="text"
            placeholder="Insert color here"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button
            className="outline-none px-4 py-1 rounded text-white shadow-lg bg-black"
            onClick={() => {setColor(inputValue); addButton();}}
          >
            upload
          </button>
        </div>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">   {/* presentcolors*/}
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

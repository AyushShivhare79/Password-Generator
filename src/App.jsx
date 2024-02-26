import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [Number, numberCheck] = useState(false);
  const [Character, charCheck] = useState(false);

  let result = "";
  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVdefghijklmnopqrstuvwxyz";

    if (Number) str += "0123456789";
    if (Character) str += "!@#$%^&*";

    for (let i = 0; i < Length; i++) {
      result += str.charAt(Math.floor(Math.random() * str.length));
    }
  }, [Length, Number, Character]);

  passwordGenerator();
  useEffect(() => {}, [Length, Number, Character, passwordGenerator]);

  return (
    <>
      <div className="text-white flex items-center flex-col">
        <h1 className=" text-4xl pb-6">Password Generator</h1>
      </div>

      <div className="flex justify-center">
        <input
          className="rounded h-8 text-black"
          // id="h"
          value={result}
          type="text"
          placeholder="Password"
          readOnly
        />
        <button className="border rounded bg-orange-500 h-8 w-16">Copy</button>
      </div>

      <div className="flex items-center flex-col text-white">
        <input
          type="range"
          id="rn"
          min={7}
          max={100}
          value={Length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label className="" htmlFor="rn">
          Length: {Length}
        </label>
      </div>

      <div className="text-white flex justify-center items-center gap-5">
        <input
          type="checkbox"
          id="numberCheck"
          onChange={() => {
            numberCheck((prev) => !prev);
          }}
        />
        <label htmlFor="numberCheck">Number</label>

        <input
          type="checkbox"
          id="charCheck"
          onChange={() => {
            charCheck((prev) => !prev);
          }}
        />
        <label htmlFor="charCheck">Character</label>
      </div>
    </>
  );
}

export default App;

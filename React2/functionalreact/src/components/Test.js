// rfce
import React, { useState } from "react";

function Test() {
    const [count , setCount] = useState(0)
  const [text, setText] = useState("");
  const [myArray, setMyArray] = useState([]);
  let addItem = (item) => {
    setMyArray([...myArray, item]);
    setText("");
  };
  return (
    <div>
      <h1>This is a Counter {count}</h1>
     <button onClick={()=>setCount(count+1)}>+1</button>
     <button onClick={()=>setCount(count-1)}>-1</button>
      {/* <input type='text' onChange={(e)=>setText(e.target.value)} />
     <h1>{text}</h1> */}
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>{" "}
      <button onClick={() => addItem(text)}>Add item</button>
      <ul>
        {myArray.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default Test;

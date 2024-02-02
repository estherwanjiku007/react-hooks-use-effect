import React, { useState, useEffect } from "react";
const [text,setText]=useState("")
const [count,setCount]=useState(0)
function App() {
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return<div> <button onClick={(()=>
    setCount((count)=>{count+1})
  )}>Ive been clicked {count} times</button>
  <input value={text}   onChange={(e)=>setText(e.target.value)}></input>
  </div>
;
}

export default App;

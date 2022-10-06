import React , {useEffect, useState} from 'react'

function Ue1() {

  const [count , setCount] = useState(0)
  const [name , setName] = useState("Aman")


useEffect(()=>{
   document.title = `This is my Title ${count} ${name}`
},[name]) //Component Did Mount

  return (
    <div>
      <h1>This is a Counter {count}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <h1>{name}</h1>
      <button onClick={()=>setName(name+"S")}>ChangeName</button>
    </div>
  )
}

export default Ue1
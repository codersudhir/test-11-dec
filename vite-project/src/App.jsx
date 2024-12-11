import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setdata]=useState([])

  useEffect(()=>{
    fetch(`https://swapi.dev/api/people`)
    .then((res)=>res.json())
    .then((res)=>setdata(res.results))
    .catch((err)=>console.log("err",err))
  },[])

const onDelete=(value)=>{
  fetch(`https://swapi.dev/api/people/${value}`)
  .then((res)=>res.json())
  .then((res)=>setdata(res.results))
  .catch((err)=>console.log("err",err))
}

  return (
    <>
    <div>
      {data.map((item,ind)=>{
        return <div style={{display:"flex",justifyContent:"space-between" ,gap:"10px" ,margin:"10px" }}>
          <p>{item.name}</p>

          <button onClick={()=>onDelete(item.name)}>Delete</button>
        </div>
      })}
    </div>
       
    </>
  )
}

export default App


import React,{useState} from 'react'
import NavBar from "./Components/NavBar";
import News from "./Components/News"

function App(){

  const [mode,setmode]=useState('general');


  const toggle=(cls)=>{
    setmode(cls)
   }
   const apikey="8920d4a763674f2bbdab1c80fea7fc2d";
  
     return (
        <>
        <div>
        <NavBar toggle={toggle}  />
        <News pagesize={9} key={mode}  apikey={apikey} country={'in'} category={mode}/>
      </div>
        </>
     )
}

export default App;



"use client"; 
import { useEffect } from 'react'


export default function login() {



  useEffect(() => {
    const keyDownHandler = (e:KeyboardEvent) => {
      if (e.code == "Enter") {
        document.body.style.backgroundColor = "red";
        
      }
      console.log(e.code)
    };
    document.addEventListener("keydown", keyDownHandler);


    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);


  return (
  <main>
    <label htmlFor="brukerId">Brukernavn</label>
      <input id = "brukerId" />
  </main>
    
  )
}

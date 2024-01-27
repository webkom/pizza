"use client"; 
import { useEffect } from 'react'
import { useCookies } from 'react-cookie';


export default function login() {

  const addUser = async (e:any) => {
    e.preventDefault();
    
    const body = {
      name: e.currentTarget.elements.name.value,
      userName: e.currentTarget.elements.userName.value
    }
    const response = await fetch("http://localhost:3000/api/addUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  }


  return(
        <div>
        <form onSubmit={addUser} method = "POST">

            <label htmlFor="name">Skriv inn ditt navn</label>
            <input type="text" name="name" id="name" />
            
            <label htmlFor="userName">Skriv inn brukernavnet ditt</label>
            <input type="text" name="userNdame" id="userName" />

            <input type="submit" value="submit" />
        </form>
        </div>
    )
}

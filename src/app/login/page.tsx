"use client"; 
import { useEffect } from 'react'

import NavBar from '@/components/Header';
import { redirect } from 'next/navigation'
import Link from 'next/link'
import "./style.css" 

export default function login() {

  const addUser = async (e:any) => {
    e.preventDefault();
    localStorage.setItem("userNamePizza", e.currentTarget.elements.name.value.toString());
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
        <NavBar/>
        <br />
    
        <form onSubmit={addUser} method = "POST">

            <label htmlFor="name">Skriv inn ditt brukernavn</label>
            <input type="text" name="name" id="name" />
            
            <label htmlFor="userName">Skriv ditt passord</label>
            <input type="text" name="userNdame" id="userName" />

            <input type="submit" value="submit" />
        </form>
        <br />
        <Link key={"Signup"} className={"loginLink"} href={"./signup"}>
            {"Signup"}
        </Link>
        </div>
         )
}

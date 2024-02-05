"use client"; 


import NavBar from '@/components/Header';
import Link from 'next/link'
import "./signup.css"
import { useRouter } from 'next/navigation'


export default function login() {

  const router = useRouter();
  const addUser = async (e:any) => {
    e.preventDefault();

    const body = {
      userName: e.currentTarget.elements.userName.value,
      
    }



    const responseTest = await fetch ("http://localhost:3000/api/users?UserName="+body.userName);
    const data = await responseTest.json();

    if (data == null && localStorage.getItem("usernamePizza") == null) {
      localStorage.setItem("userNamePizza", body.userName);
      const response = await fetch("http://localhost:3000/api/addUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      router.push("./")
        

        

      
    }
    else {
      const respEle = document.getElementById("response")
      respEle.style.visibility = "visible"


    }

    


    
   
  }



  return(
        <div>
        <NavBar/>
        <br />
    
        <form onSubmit={addUser} method = "POST">
         

            <label htmlFor="useName">Skriv inn ditt brukernavn</label>
            <input type="text" name="userName" id="userName" />
            
            <label htmlFor="password">Skriv ditt passord</label>
            <input type="text" name="password" id="password" />

            <input type="submit" value="submit" />
        </form>
        <h1 id='response' >
          User already exist <br/> If it is you, please try <Link key={"login"} className={"loginLink"} href={"./login"}>loging in</Link>"
        </h1>
        </div>
         )

  }
"use client"; 


import NavBar from '@/components/Header';


export default function login() {

  const addUser = async (e:any) => {
    e.preventDefault();
    const responseTest = await fetch ("http://localhost:3000/api/users?UserName="+e.currentTarget.elements.name.value.toString())
    const data = await responseTest.json()
    console.log(data)

        localStorage.setItem("userNamePizza", e.currentTarget.elements.name.value.toString());
    const body = {
      name: e.currentTarget.elements.name.value,
      userName: e.currentTarget.elements.userName.value,
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
            <input type="text" name="userName" id="userName" />

            <input type="submit" value="submit" />
        </form>
        </div>
         )

  }
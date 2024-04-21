"use client";

import NavBar from "@/components/Header";
import Link from "next/link";
import "./signup.css";
import { useRouter } from "next/navigation";

export default function Singup() {
  const router = useRouter();
  const addUser = async (e: any) => {
    e.preventDefault();

    const body = {
      userName: e.currentTarget.elements.userName.value,
    };

    const responseTest = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/users?UserName=" + body.userName
    );
    const data = await responseTest.json();

    if (data == null && localStorage.getItem("usernamePizza") == null) {
      localStorage.setItem("userNamePizza", body.userName);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/addUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      router.push("./");
    } else {
      const respEl = document.getElementById("response");
      respEl.style.visibility = "visible";
    }
  };

  /* const changeUsername = (e:any) => {
    console.log(e.target.value.includes(","))
  } */

  return (
    <div>
      <NavBar />
      <br />

      <form onSubmit={addUser} method="POST">
        <label htmlFor="useName">Skriv inn ditt brukernavn</label>
        <input type="text" name="userName" id="userName" />

        <label htmlFor="password">Skriv ditt passord</label>
        <input type="text" name="password" id="password" />

        <input type="submit" value="submit" />
      </form>
      {/* <h1 id="response1">userName cannot include a comma ","</h1> */}
      <h1 id="response">
        User already exist <br /> If it is you, please try{" "}
        <Link key={"login"} className={"loginLink"} href={"./login"}>
          loging in
        </Link>
      </h1>
    </div>
  );
}

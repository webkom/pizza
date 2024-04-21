"use client";

import Link from "next/link";
import "./style.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const addUser = async (e: any) => {
    e.preventDefault();

    const body = {
      userName: e.currentTarget.elements.userName.value,
    };

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/users?UserName=" + body.userName,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const cookie = localStorage.getItem("userNamePizza");
    if (cookie != null) {
      const resp2 = document.getElementById("response2");
      resp2.style.visibility = "visible";
    } else if (data != null) {
      localStorage.setItem("userNamePizza", body.userName);
      router.push("./");
    } else {
      const resp1 = document.getElementById("response1");
      resp1.style.visibility = "visible";
    }
  };

  return (
    <div>
      <form onSubmit={addUser} method="POST">
        <label htmlFor="userName">Skriv inn ditt brukernavn</label>
        <input type="text" name="userName" id="userName" />
        <br />
        <label htmlFor="password">Skriv ditt passord</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="submit" />
      </form>
      <br />
      <div id="response1">User does not exist, Try signing up</div>
      <div id="response2">
        You are already signed in, try signing out first using the link in the
        upper right corner
      </div>
      <br />
      <br />
      <label>Don{"'"}t have user? Try signing up! </label>
      <br></br>
      <br></br>
      <Link key={"Signup"} className={"loginLink"} href={"./signup"}>
        {"Signup"}
      </Link>
    </div>
  );
}

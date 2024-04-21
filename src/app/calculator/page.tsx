"use client";
import { ObjectId } from "mongodb";
import "./page.css";
// import { redirect } from "next/navigation";
import UserVer from "@/components/UserVer";

import NavBar from "../../components/Header";

import { useEffect, useState } from "react";

type userProps = {
  id: ObjectId;
  userName: string;
  auth: boolean;
};

export default function Stats() {
  const [selectedUsers, setSelectedUsers] = useState<userProps[]>([]);

  const addUserToList = async (e: any) => {
    e.preventDefault();

    const userName = e.currentTarget.elements.userName.value;
    e.currentTarget.elements.userName.value = "";
    const responseTest = await fetch(
      "http://localhost:3000/api/users?UserName=" + userName
    );
    const medNavn = selectedUsers.filter((ele) => ele.userName == userName);

    const data = await responseTest.json();


    console.log(data);
    if (medNavn.length > 0) {
      //response user already chosen
    } else if (data == null) {
      setSelectedUsers([
        ...selectedUsers,
        {
          id: new ObjectId(-1),
          userName: userName,
          auth: false,
        },
      ]);
    } else {
      setSelectedUsers([
        ...selectedUsers,
        {
          id: data._id,
          userName: data.userName,
          auth: true,
        },
      ]);
    }
    console.log(selectedUsers);
    //what happen when a user is added to list
  };
  const removeUser = (userName: string) => {
    setSelectedUsers(selectedUsers.filter((user) => user.userName != userName));
  };

  const calculate = async (e: any) => {
    e.preventDefault();
    const acceptedUser =  selectedUsers.filter((user:userProps) => 
        user.auth 
    );


    const body = {
      userList: acceptedUser,
      pizzaConst: e.currentTarget.elements.pizzaConst.value,
      vegetar: e.currentTarget.elements.veg.value,
    };

    const response = await fetch("http://localhost:3000/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json()).then((pizza) => console.log(pizza))
    //const data = response.json();
    //console.log(data+1)
  };
  return (
    <main>
      <NavBar />

      <h1 className="Header">Pizza kalkulatoren</h1>

      <form onSubmit={addUserToList} method="post">
        <label htmlFor="userName">Skriv inn et brukernavn</label>
        <input type="text" name="userName" id="userName" />
        <input type="submit" value="submit" />
      </form>

      <form onSubmit={calculate} method="POST">
        <div id="userVerWrap">
          {selectedUsers.map((user) => (
            <UserVer
              key={user.userName}
              id={user.id}
              userName={user.userName}
              auth={user.auth}
              func={removeUser}
            />
          ))}
        </div>

        <label htmlFor="pizzaConst">Vi bruker pizzakonstanen </label>
        <input type="text" name="pizzaConst" id="pizzaConst" defaultValue={2.67} />

        <label htmlFor="veg">velg minste antall veganske pizzaer: </label>
        <input type="number" name="veg" id="veg" defaultValue={0} />

        <input type="submit" value="submit" />
      </form>
    </main>
  );
}

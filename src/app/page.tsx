"use client";

import "./page.css";
import { redirect } from "next/navigation";
import Modal from "../components/Modal";

import { useEffect, useState } from "react";
import { PizzaType } from "./types";

export default function Home() {

  const user = typeof window !== 'undefined' ? localStorage.getItem("userNamePizza") : null;
  if (user == null) {
    redirect("./login");
  }

  const [selectedPizzaId, SelectedPizzaId] = useState("-1");

  const ModalDisplay = (id: string) => {
    SelectedPizzaId(id);
  };

  const ModalClose = () => {
    SelectedPizzaId("-1");
  };

  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/pizza"
      );
      const data = await response.json();
      setPizzas(data);
    };
    fetchPizzas();
  }, []);

  return (
    <main>
      <h1 className="Header">VELKOMMEN TIL PIZZA-O-METER</h1>

      <div className="PizzaBox">
        {pizzas.map((pizza:PizzaType) => (
          <button
            key={pizza._id}
            onClick={() => ModalDisplay(pizza._id.toString())}
          >
            <div>
              <img src={pizza.img} className="PizzaImg"></img>
              <p className="PizzaName">{pizza.name}</p>
              <p className="PizzaPrice">{pizza.price},- kr</p>
              <p className="Stars">&#9734;&#9734;&#9734;&#9734;&#9734;</p>
            </div>
          </button>
        ))}
      </div>

      <div className="ModalHent">
        {selectedPizzaId !== "-1" && (
          <Modal id_nummer={selectedPizzaId} func={ModalClose} />
        )}
      </div>
    </main>
  );
}

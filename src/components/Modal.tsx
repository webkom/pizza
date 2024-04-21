"use client";
import "./Modal.css";
import pizzas from "../app/pizzadata.json";
import { useEffect, useState } from "react";

type pizzaProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type modalProps = {
  id_nummer: string;
  func: () => void;
};

const Modal = ({ id_nummer, func }: modalProps) => {
  const user = localStorage.getItem("userNamePizza");

  const [pizza, setPizza] = useState<pizzaProps>({
    id: 0,
    name: "This pizza does not exist",
    price: -1,
    img: "fail",
  });

  const findPizza = async () => {
    const link =
      process.env.NEXT_PUBLIC_API_URL +
      "/api/pizza" +
      "?" +
      "pizzaId=" +
      id_nummer.toString();
    const response = await fetch(link);
    const data = await response.json();
    setPizza(data);

    const ratingLink =
      process.env.NEXT_PUBLIC_API_URL +
      "/api/ratingOne" +
      "?" +
      "pizzaId=" +
      id_nummer.toString() +
      "&" +
      "userId=" +
      user;
    const responseRate = await fetch(ratingLink);
    const dataRate = (await responseRate.json()) ?? "rating doesn't exist";

    const num = Number.isInteger(dataRate.rating) ? Number(dataRate.rating) >= 0 && Number(dataRate.rating) <= 5
        ? Number(dataRate.rating)
        : 0
      : 0;

    const rateList: HTMLElement[] = [
      document.getElementById("modalR1"),
      document.getElementById("modalR2"),
      document.getElementById("modalR3"),
      document.getElementById("modalR4"),
      document.getElementById("modalR5"),
    ];
    for (let i = 0; i < num; i++) {
      rateList[i].innerHTML = "&#9733;";
    }
    for (let i = num; i < 5; i++) {
      rateList[i].innerHTML = "&#9734;";
    }
  };
  useEffect(() => {
    findPizza();
  }, [id_nummer]);

  const addRate = async (num: number, id: string) => {
    const body = {
      rating: num,
      pizzaid: id_nummer,
      name: user,
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/rating",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  };

  const whenRate = (e: React.MouseEvent<HTMLElement>, id: string) => {
    const rateList: HTMLElement[] = [
      document.getElementById("modalR1"),
      document.getElementById("modalR2"),
      document.getElementById("modalR3"),
      document.getElementById("modalR4"),
      document.getElementById("modalR5"),
    ];
    const num: number = parseInt(e.target.id[e.target.id.length - 1]);
    addRate(num, id);

    for (let i = 0; i < num; i++) {
      rateList[i].innerHTML = "&#9733;";
    }
    for (let i = num; i < 5; i++) {
      rateList[i].innerHTML = "&#9734;";
    }
  };

  const closeModal = () => {
    func();
  };

  return (
    <div>
      <div className="modal">
        <img src={pizza.img} alt="hei" className="modalBilde" />
        <div className="close" onClick={closeModal}>
          <img id="closeLogo" src="CloseButton.svg" alt="closebutton" />
        </div>
      </div>
      <div className="modalInfo">
        <h1 className="modalTitle">{pizza.name} </h1>
        <h3 className="modalPrice">{pizza.price} </h3>
        <p className="modalDesc">En veldig fin pizza </p>
        <div className="rating">
          <span
            id="modalR1"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              whenRate(e, pizza.id);
            }}
          >
            &#9734;
          </span>
          <span
            id="modalR2"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              whenRate(e, pizza.id);
            }}
          >
            &#9734;
          </span>
          <span
            id="modalR3"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              whenRate(e, pizza.id);
            }}
          >
            &#9734;
          </span>
          <span
            id="modalR4"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              whenRate(e, pizza.id);
            }}
          >
            &#9734;
          </span>
          <span
            id="modalR5"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              whenRate(e, pizza.id);
            }}
          >
            &#9734;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;

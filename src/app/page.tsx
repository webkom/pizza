'use client';
import Image from 'next/image'
import "./Page.css"
import pizzas from "./pizzadata.json"
import NavBar from './components/Header'
import "./components/navbar.css" 
import Modal from "./components/Modal"
import { useState } from 'react';


export default function Home() {

  const [selectedPizzaId, SelectedPizzaId] = useState("-1")

  const ModalDisplay = (id: string) => {
    
    SelectedPizzaId(id)
  
  };

  const ModalClose = () => {
    SelectedPizzaId("-1")
  }

  return (
    <main>

      <NavBar/>
      
      <h1 className='Header'>VELKOMMEN TIL PIZZA-O-METER</h1>
      
      
     <div className='PizzaBox'>{pizzas.map(pizza => <button key={pizza.id} onClick={() => ModalDisplay(pizza.id.toString())}><div><img src={pizza.img} className='PizzaImg'></img>
                                                         <p className='PizzaName'>{pizza.name}</p>
                                                         <p className='PizzaPrice'>{pizza.price},- kr</p> 
                                                         <p className='Stars'>&#9734;&#9734;&#9734;&#9734;&#9734;</p></div></button>)}</div>


    <div className="ModalHent" >{selectedPizzaId !== "-1" && <Modal id_nummer={selectedPizzaId} func={ModalClose} />}</div>
    </main>
  )
}

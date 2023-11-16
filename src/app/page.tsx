import Image from 'next/image'
import "./Page.css"
import pizzas from "./pizzadata.json"
import NavBar from './components/Header'
import "./components/navbar.css" 

export default function Home() {
  return (
    <main>
      <NavBar/>
      
      <h1 className='Header'>VELKOMMEN TIL PIZZA-O-METER</h1>
      
      
     <div className='PizzaBox'>{pizzas.map(pizza => <button><div><img src={pizza.img} className='PizzaImg'></img>
                                                         <p className='PizzaName'>{pizza.name}</p>
                                                         <p className='PizzaPrice'>{pizza.price},- kr</p> 
                                                         <p className='Stars'>&#9734;&#9734;&#9734;&#9734;&#9734;</p></div></button>)}</div>
    </main>
  )
}

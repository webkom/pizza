import Image from 'next/image'
import "./Page.css"
import pizzas from "./pizzadata.json"

export default function Home() {
  return (
    <main>
      <h1>VELKOMMEN TIL</h1>
      <h1>PIZZA-O-METER</h1>
      {pizzas.map(pizza => <p> <img src={pizza.img} className='PizzaImg'></img> <div></div> {pizza.name} ------- {pizza.price}</p>)}
    </main>
  )
}

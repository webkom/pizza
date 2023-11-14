import Image from 'next/image'
import styles from './page.module.css'
import pizzas from "./pizzadata.json"
import NavBar from './components/Header'
import "./components/navbar.css" 

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <h1>VELKOMMEN TIL</h1>
      <h1>PIZZA-O-METER</h1>
      {pizzas.map(pizza => <p>{pizza.name} ------- {pizza.price}</p>)}
    </main>
  )
}

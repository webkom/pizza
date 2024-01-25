'use client';
import "./Modal.css"
import pizzas from "../app/pizzadata.json"
import { useEffect, useState } from "react";
import { json } from "stream/consumers";


type pizzaProps = {
    "id":number,
    "name":string,
    "price":number,
    "img":string,
}



type modalProps = {
    "id_nummer": string;
    "func": () => void;

}


const Modal = ({id_nummer, func}: modalProps) => {

    console.log(id_nummer)
    const [pizza, setPizza] = useState<pizzaProps>({
        "id": 0,
        "name": "This pizza does not exist",
        "price": -1,
        "img":"fail"
    })

    useEffect(()=> {
        for (const elem of pizzas) {
            if (elem.id.toString() == id_nummer) {
                setPizza(elem)
    
            }
        }
    
    }, [id_nummer]   )
    
    const addRate = async (num:number, id:string) => {
        const body = {
            rating: num,
            pizzaid: "65a6db63f0278be56881a08b"
          }
 
          const response = await fetch("http://localhost:3000/api/rating",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",

            },
            body: JSON.stringify(body),
          })
            
        
    }
 


    
    const whenRate = (e: React.MouseEvent<HTMLElement>, id:string) => {
        const rateList: HTMLElement[]= [
            document.getElementById("modalR1"),
            document.getElementById("modalR2"),
            document.getElementById("modalR3"),
            document.getElementById("modalR4"),
            document.getElementById("modalR5"),
        ]
        const num: number = parseInt(e.target.id[e.target.id.length-1])
        addRate(num, id);
        

        for (let i = 0; i < num; i++) {
            rateList[i].innerHTML = "&#9733;";
            
        }
        for (let i = num; i < 5; i++) {
            rateList[i].innerHTML = "&#9734;"
            
        }

  
        

    }

    const closeModal = () => {
        func()
    }


   

    return (

        <div >
            
            <div className="modal" >
                <img src={pizza.img} alt="hei" className="modalBilde" />
                <div className="close" onClick={closeModal}>
                    <img id="closeLogo" src="CloseButton.svg" alt="closebutton" />
                </div>
            </div>
            <div className="modalInfo" >
                
                <h1 className="modalTitle" >{pizza.name} </h1>
                <h3 className="modalPrice" >{pizza.price} </h3>
                <p className="modalDesc">En veldig fin pizza </p>
                <div className="rating"  >
                    <span id="modalR1" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e, pizza.id)}}>&#9734;</span>
                    <span id="modalR2" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e, pizza.id)}}>&#9734;</span>
                    <span id="modalR3" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e, pizza.id)}}>&#9734;</span>
                    <span id="modalR4" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e, pizza.id)}}>&#9734;</span>
                    <span id="modalR5" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e, pizza.id)}}>&#9734;</span>

                </div>
                



            </div>
        
        
        </div>
        

        
    )
    
}

export default Modal;


'use client';
import "./Modal.css"





const Modal = () => {
    
    
    const whenRate = (e: React.MouseEvent<HTMLElement>) => {
        const rateList: HTMLElement[] = [
            document.getElementById("modalR1"),
            document.getElementById("modalR2"),
            document.getElementById("modalR3"),
            document.getElementById("modalR4"),
            document.getElementById("modalR5"),
        ]
        const num: number = parseInt(e.target.id[e.target.id.length-1])
        for (let i = 0; i < num; i++) {
            rateList[i].innerHTML = "&#9733;";
            
        }
        for (let i = num; i < 5; i++) {
            rateList[i].innerHTML = "&#9734;"
            
        }

        /* her skal det kjøre en kode som oppdaterer verdien i databasen. */
        

    }


   

    return (

        <div>
            <div className="modal" >
                <img src="./Biffen.jpg" alt="hei" className="modalBilde" />
                
            </div>
            <div className="modalInfo" >
                
                <h1 className="modalTitle"
                

                
                
                > Biff</h1>
                <h3 className="modalPrice" >21,-</h3>
                <p className="modalDesc">En veldig fin pizza </p>
                <div className="rating" onClick={(e: React.MouseEvent<HTMLElement>) => { whenRate(e)}} >
                    <span id="modalR1" >&#9734;</span>
                    <span id="modalR2">&#9734;</span>
                    <span id="modalR3">&#9734;</span>
                    <span id="modalR4">&#9734;</span>
                    <span id="modalR5">&#9734;</span>

                </div>



            </div>
        
        
        </div>
        

        
    )
    
}

export default Modal;

/* &#9733;
&#9734; */
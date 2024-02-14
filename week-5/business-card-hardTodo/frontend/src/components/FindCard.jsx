import { useState } from 'react'
import { CardComponent} from './CardComponent'


export function FindCard(){

    const [input, setInput] = useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [card, setCard] = useState({});
    const[message, setMessage] = useState("");
    const[displayMessage, setDsiplayMessage] = useState(false);


     return <div style={{
        marginTop: '30px'
     }}>

        <h4 style={{
            marginBottom: '10px'
        }}>Find your Card</h4>
        <input type="text" placeholder="Enter your Full Name" onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={async ()=>{
              const responseObj = await fetch(`http://localhost:3000/card?name=${input}`, {
                 headers:{
                     "content-Type": "application/json"
                 }
              })

              const cardObj = await responseObj.json();
              setShowComponent(false);
              setDsiplayMessage(false);

              if(cardObj.message){
                 setMessage(cardObj.message);
                 setDsiplayMessage(true);
              } else {
                  setCard(cardObj);
                  setShowComponent(true);
              }
        }}>
            Find Card
        </button>

        {showComponent == true ? (<CardComponent name={card.name} description={card.description} interests={card.interests} socials={card.socials}></CardComponent>) : ""}

        {displayMessage == true ? <div>
            <h5>{message}</h5>
        </div> : ""}

     </div>
}
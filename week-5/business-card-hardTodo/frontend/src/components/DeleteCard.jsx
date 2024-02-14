import {useState} from 'react';

export function DeleteCard(){

    const[input, setInput] = useState("");
    const[message, setMessage] = useState("");
    const[displayMessage, setDsiplayMessage] = useState(false);

    return <div style={{
        marginTop: '30px'
     }}>
        <h4 style={{
            marginBottom: '10px'
        }}>Delete Your existing Card</h4>
        <input type="text" placeholder="Enter your full name" onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={async ()=>{
               const responseObj = await fetch(`http://localhost:3000/card?name=${input}`, {
                method: "DELETE",
                headers:{
                    "content-Type": "application/json"
                }
             })

             const obj = await responseObj.json();
             setMessage(obj.message);
             setDsiplayMessage(true);
        }}>Delete Card</button>

        {displayMessage == true ? <div>
            <h5>{message}</h5>
        </div> : ""}
    </div>
}
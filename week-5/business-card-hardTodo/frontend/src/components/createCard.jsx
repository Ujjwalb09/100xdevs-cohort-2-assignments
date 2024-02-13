import { useState } from "react"
import { CardComponent } from "./CardComponent"

// let name, description, interests, socials;


export function CreateCard(){

    const [nameState, setName] = useState("");
    const [descriptionState, setdescription] = useState("");
    const [interestsState, setinterests] = useState([]);
    const [socialsState, setsocials] = useState({});
    const [showCard, setShowCard] = useState('false');

    function interestChange(index, value){
        const newInterests = [...interestsState];
        newInterests[index] = value;
        setinterests(newInterests);
    }

    function socialChange(property, value){
         let socialsObj = {...socialsState};
         socialsObj[property] = value;
         setsocials(socialsObj);
    }

    return <div>
        <input type="text" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <textarea style={styles.textarea} placeholder="Short description about you" onChange={(e)=>{setdescription(e.target.value)}}></textarea>
        <div id="interests">
            <h4 style={styles.headers}>Interests</h4>
            <input type="text" placeholder="1" onChange={(e)=>interestChange(0, e.target.value)}/> <br /><br />
            <input type="text" placeholder="2" onChange={(e)=>interestChange(1, e.target.value)}/> <br /><br />
            <input type="text" placeholder="3" onChange={(e)=>interestChange(2, e.target.value)}/>
        </div>
        <div>
            <h4 style={styles.headers}>Your Socials</h4>
            <input type="text" placeholder="LinkedIn" onChange={(e)=>socialChange("LinkedIn", e.target.value)}/> <br /><br />
            <input type="text" placeholder="Twitter" onChange={(e)=>socialChange("Twitter", e.target.value)}/> <br /><br />
        </div>

        <button style={styles.button} onClick={async ()=>{
            await fetch("http://localhost:3000/card", {
               method: "POST",
               body: JSON.stringify({
                  name: nameState,
                  description: descriptionState,
                  interests: interestsState,
                  socials: socialsState
               }),
               headers:{
                   "content-Type": "application/json"
               }
            })
       
            setShowCard(true);
            
        }}>Generate Card</button>

        {showCard == true ? (<CardComponent name={nameState} description={descriptionState} interests={interestsState} socials={socialsState}></CardComponent>) : ""}

    </div>
}



const styles = {
    headers:{
        marginBottom: '10px'
    },

    textarea:{
        width: '172px',
        height: '55px',
        whiteSpace: 'pre-wrap'
    },

    button:{
        padding: '10px',
        margin: '10px'
    }
}
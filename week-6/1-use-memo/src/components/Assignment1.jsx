import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [render, setRender] = useState(0);

    // Your solution starts here
    let count = 0;

    let expensiveValue = useMemo(()=>{

        console.log('I am re rendering');
        if(input == 0 || input == 1){
            return 1
        }

            let result = 1;
            for(let i = 2; i <= input; i++){
                result *= i;
            }
            return result;
 
    }, [input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
            <button onClick={()=>{
                setRender(count++)
            }}>re-render</button>
        </div>
    );
}
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="text" placeholder='Your Name'/> <br /> <br />
      <input type="text" placeholder='Short description about you'/> <br /> <br />
      <input type="text" placeholder='Your interests'/> <br /> <br />
      <input type="text" placeholder='Your linkedIn'/> <br /> <br />
      <input type="text" placeholder='Your Twitter'/> <br /> <br />
      <button>Generate Card</button>
    </>
  )
}

export default App

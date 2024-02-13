import { useState } from 'react'
import { CreateCard } from './components/createCard'
import { CardComponent } from './components/CardComponent'

function App() {
  const [card, setCard] = useState({})



  return (
    <>
      <CreateCard> </CreateCard>
    </>
  )
}

export default App

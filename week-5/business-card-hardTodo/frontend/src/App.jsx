import { useState } from 'react'
import { CreateCard } from './components/createCard'
import { CardComponent } from './components/CardComponent'
import { FindCard } from './components/FindCard'
import { DeleteCard } from './components/DeleteCard'

function App() {
  const [card, setCard] = useState({})



  return (
    <>
      <CreateCard> </CreateCard>
      <FindCard></FindCard>
      <DeleteCard></DeleteCard>
    </>
  )
}

export default App

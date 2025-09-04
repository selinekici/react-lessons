import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [firstName, setFirstName] = useState('Selin');
  const [lastName, setLastName] = useState('Ekici');


  const handleChange = () => {
    setFirstName("Ayse")
  }

  return (
    <div>
      <div>{firstName}</div>

      <div><button onClick={handleChange}>Change name</button></div>
    </div>

  )
}

export default App

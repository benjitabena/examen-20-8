import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './userList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Examen 20/8</h1>
      <h3>Benjamin Benavides</h3>
      <UserList></UserList>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponents from './components/Navbar'
import HomePages from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePages/>
    </>
  )
}

export default App

import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/Hero"
import Client from "./components/Client.jsx"
import Superpowers from "./components/Superpowers.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Superpowers />
      <Footer />
    </>
  )
}

export default App

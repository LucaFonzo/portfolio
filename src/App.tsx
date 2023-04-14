import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App

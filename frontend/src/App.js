import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Rour } from 'react-router-dom'
import Header from './components/Header'
import Reviews from './components/Reviews'
import Categories from './components/Categories'
import HomeProduct from './components/HomeProduct'
import SecondCategories from './components/SecondCategories'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <Reviews/>
      <Categories/>
      <HomeProduct/>
      <SecondCategories/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

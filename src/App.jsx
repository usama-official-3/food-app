import React from 'react'
import Navbar from './compononets/Navbar'
import Hero from './compononets/Hero'
import HeadlineCards from './compononets/HeadlineCards'
import Food from './compononets/Food'
import Category from './compononets/Category'


const App = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <HeadlineCards/>
       <Food/>
       <Category/>
    </>
  )
}

export default App

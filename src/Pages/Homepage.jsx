import React from 'react'
import Header from '../Components/Header'
import Aiproduct from '../Components/Aiproduct'
import Aifashion from "../Components/Aifashion"
import Pricing from '../Components/Pricing'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog'

export default function Homepage() {
  return (
    <>
      <Aiproduct />
      <Aifashion />
      <Pricing />
      <Blog/>
      <Contact />
    </>
  )
}

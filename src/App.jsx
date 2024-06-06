import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import { Navbar } from './components/Navbar'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </>
  )
}

export default Sentry.withProfiler(App);

import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import { Navbar } from './components/Navbar'
import Model from './components/Model'
import * as Sentry from '@sentry/react'
import Features from './components/Features'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
    </>
  )
}

export default Sentry.withProfiler(App);

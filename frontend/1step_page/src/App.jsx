import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Header } from './views/header/Header'
import { AboutUs } from './views/aboutUs/AboutUs'
import { Services } from './views/services/Services'
import { ContactUs } from './views/contactUs/ContactUs'
import { Beneficts } from './views/beneficts/Beneficts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Beneficts />
      <ContactUs />
    </div>
    </>
  )
}

export default App

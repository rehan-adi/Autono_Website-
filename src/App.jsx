import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Technology from './Components/Technology'
import Careers from './Components/Careers'
import About from './Components/About'
import MobileFooter from './Components/MobileFooter'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={  <Home />} />
        <Route path='/Technology' element={<Technology />} />
        <Route path='/About' element={<About />} />
        <Route path='/Careers' element={<Careers />} />
      </Routes>
      <MobileFooter />
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Technology from './Components/Technology'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={  <Home />} />
        <Route path='/Technology' element={<Technology />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

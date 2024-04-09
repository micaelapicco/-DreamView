import {    Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ComprarTicket  from './pages/ComprarTicket'
import DatosPersonales from './pages/DatosPersonales'
import { Finalizar } from './pages/Finalizar'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/comprar-ticket' element={<ComprarTicket />} />
          <Route
            path='/datos-personales'
            element={<DatosPersonales />}
          />
          <Route path='/datos-personales/finalizar' element={<Finalizar/>} />
        </Routes>
    </>
  )
}

export default App

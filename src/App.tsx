import { useState } from 'react'
import './App.css'
// import { Register } from './components/Register'
import { Login } from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaNueva from './components/PaginaNueva';
import { Register } from './components/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pagina-nueva" element={<PaginaNueva />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App

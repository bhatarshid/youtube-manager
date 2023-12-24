import './App.css'
import Login from './components/views/Login/Login'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Signup from './components/views/signup/Signup'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
    </Router>
  )
}

export default App

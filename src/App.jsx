import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from '../Pages/Homepage/Homepage';
import { Login } from '../Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />

    </Routes>
    
    
    
     </BrowserRouter>
  )
}

export default App

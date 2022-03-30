import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from '../Pages/Homepage/Homepage';
import { Login } from '../Pages/Login/Login';
import { Network } from '../Pages/Network/Network';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/network' element={<Network />} />

    </Routes>
    
    
    
     </BrowserRouter>
  )
}

export default App

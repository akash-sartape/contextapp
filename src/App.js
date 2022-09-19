import React from 'react';
import './App.css';
import Register from './register'
import Login from './login';
import Welcome from './welcome';
import { BrowserRouter, Routes,Route} from "react-router-dom";

function App() {

  return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path='/register'  element = {<Register/>} />
          <Route path='/login'  element = {<Login/>} />
          <Route path='/welcome'  element = {<Welcome/>} />
        </Routes>
        </BrowserRouter>
        
        </>
  )
}

export default App ;

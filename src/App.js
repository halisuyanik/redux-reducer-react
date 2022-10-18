import React from 'react';
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card';


function App(){
    return(
        <BrowserRouter>
            <div className='App'>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/card/:user' element={<Card/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
       
    )
    
}

export default App;

import React from "react";
import './Styless/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"

import  Home  from './Componentes/home'
import  Create  from './Componentes/create'
import  Update  from './Componentes/update'
import  Read  from './Componentes/read'
import  Comprar  from './Componentes/comprar'
import  Eliminar  from './Componentes/eliminar'
import  NotFound  from './Componentes/notFound'




function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/eliminar/:id' element={<Eliminar/>}/>
        <Route path='/comprar/:id' element={<Comprar/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )

       
      
} 

export default App;

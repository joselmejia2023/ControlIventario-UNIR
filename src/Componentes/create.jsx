import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../Styless/index.css'

function Create() {

    const [values, setValues]= useState({
        id: '',
        nombre: '',
        categoria: '',
        precio: '',
        stock: ''
    })
    const navigate = useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault()

        axios.post('http://localhost:3000/posts',values)
        .then(res=>{console.log(res);
        navigate('/')})
        .catch(err  => console.log(err));
        
    }
  return ( 
            
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Registro de Productos</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="Id">Id</label>
                        <input type='text' name='id' className='form Control' placeholder='Enter id'
                        onChange={e=> setValues({...values,id: e.target.value})}/>
                        
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Nombre">Nombre</label>
                        <input type='text' name='Nombre' className='form Control' placeholder='Enter Nombre'
                        onChange={e=> setValues({...values,nombre: e.target.value})}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor="categoria">Categoria</label>
                        <input type='text' name='categoria' className='form Control' placeholder='Enter categoria'
                        onChange={e=> setValues({...values,categoria: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="precio">Precio</label>
                        <input type='text' name='precio' className='form Control' placeholder='Enter precio'
                        onChange={e=> setValues({...values,precio: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="stock">Stock</label>
                        <input type='text' name='stock' className='form Control' placeholder='Enter stock'
                        onChange={e=> setValues({...values,stock: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="imagen">Imagen</label>
                        <input type='text' name='imagen' className='form Control' placeholder='Enter imagen'
                        onChange={e=> setValues({...values,imagen: e.target.value})}/>
                    </div>


                    <button className='btn btn-success  m-2 '>Grabar</button>
                    <Link to ="/" className='btn btn-success'>Regresar</Link>
                    
                </form>

            </div>
        </div>
        
    
  ) 
}

export default Create
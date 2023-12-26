//import React from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



function Update() {

  //const [data, setData]=useState([])
  const {id} = useParams();
  const [values, setValues]= useState({
    id: '',
    nombre: '',
    categoria: '',
    precio: '',
    stock: ''
})
const navigate =useNavigate();
 
  useEffect(()=>{
    axios.get('http://localhost:3000/posts/'+id)
      .then(res=>{
            setValues(res.data);
      })
      .catch(err  => console.log(err))

  },[id])

  const handleUpdate = (event)=>{
    event.preventDefault();

    axios.put('http://localhost:3000/posts/'+id,values)
    .then(res=>{console.log(res);
    navigate('/')})
    .catch(err  => console.log(err));
    
  }
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Modificar Productos</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>  
                        <label htmlFor="id">Id:</label>
                        <input type='text' name='id' className='form Control' placeholder='Enter id'
                        value={values.id}  onChange={e=> setValues({...values,id: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="nombre">Nombre</label>
                        <input type='text' name='nombre' className='form Control' placeholder='Enter Nombre'
                        value={values.nombre}  onChange={e=> setValues({...values,nombre: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="categoria">Categoria</label>
                        <input type='text' name='categoria' className='form Control' placeholder='Enter Categoria'
                        value={values.categoria}  onChange={e=> setValues({...values,categoria: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="precio">Precio</label>
                        <input type='text' name='precio' className='form Control' placeholder='Enter Precio'
                        value={values.precio}  onChange={e=> setValues({...values,precio: e.target.value})}/>   
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="stock">Stock</label>
                        <input type='text' name='stock' className='form Control' placeholder='Enter Stock'
                        value={values.stock}  onChange={e=> setValues({...values,stock  : e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="imagen">Imagen</label>
                        <input type='text' name='imagen' className='form Control' placeholder='Enter imagen'
                        value={values.imagen}  onChange={e=> setValues({...values,imagen  : e.target.value})}/>
                    </div>


                    <button className='btn btn-success'>Actualizar</button>
                    <Link to ="/" className='btn btn-success ms-4'>Regresar</Link>
                    
                </form>

            </div>
        </div>
    </div>
  )
}
  
export default Update
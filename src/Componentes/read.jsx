import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import '../Styless/index.css'

import { Card } from 'react-bootstrap';

function Read() {
 

  const [data, setData]=useState([])
  //let { id } = useParams();
  const {id} = useParams()
 

  useEffect(()=>{

    axios.get('http://localhost:3000/posts/'+id)
      .then(res=>setData(res.data))
      .catch(err  => console.log(err))

  },[id])

  return (
   

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detalle de Producto</h3>
          <div className='mb-2'>
            <strong>Nombre: {data.nombre}</strong>
          </div>
          <div className='mb-2'>
            <strong>Categoria:  {data.categoria}</strong>
          </div>
          <div className='mb-2'>
            <strong>Precio: {data.precio}</strong>
          </div>
          <div className='mb-2'>
            <Card>
                 <img src={data.imagen}  />
            </Card>
  
          </div>
                     
                <Link to={`/update/${id}`} className='btn btn-success'>Modificar</Link>
                <Link to ="/" className='btn btn-success ms-3'>Regresar</Link>

                     
           </div>
      </div>
 
  )
} 



export default Read
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import header from '../Componentes/header'

import '../Styless/index.css'
import { Button, Card } from 'react-bootstrap'

//import { hasFormSubmit } from '@testing-library/user-event/dist/utils'


function Home() {

  const navigate = useNavigate()
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then(res=>setData(res.data))
         //.then(res => console.log(res))
        .catch(err  => console.log(err))

    },[])

    const handleDelete=(id)=> {

        const confirm = window.confirm("Por favor confirmar la eliminación del producto")
        if (confirm) {
            axios.delete('http://localhost:3000/posts/'+id)
            .then(res=>{
                window.location.reload();
            //useLocation.reload()
            //location.reload()

            }).catch(err=>console.log(err));
        }
    
      }



  return (
  
    

    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
   

        

        <h1>CONTROL DE INVENTARIO -  FARMACIA - ACT.1 - UNIR </h1>

        
       
        <div className='w-75 rounded bg-white border shadow p-4'>        
        <div className='d-flex justify-content-end'>
            <Link to= "/create"class="btn btn-success">Agregar Prodcto</Link>
        </div>
       
            <table className="table table-striped">
                <thead>
                
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>CATEGORIA</th>
                        <th>STOCK</th>
          
                    </tr>
                </thead>
                    <tbody>
                        {
                      
                            data.map((d,i)=>(
                                <tr key={i}>
                                    <td> {d.id}</td>  
                                    <td> {d.nombre}</td>        
                                    <td> {d.precio}</td> 
                                    <td> {d.categoria}</td> 
                                    <td> {d.stock}</td> 
                                       
                             
                                    <td>
                                        <Link to={`/read/${d.id}`}className='btn btn-success m-2'>Consultar</Link>
                                        <Link to={`/update/${d.id}`} className='btn btn-success m-2'>Modificar</Link>
                                        {/*<Link to={`/comprar/${d.id}`} className='btn btn-success m-2 '>Comprar</Link>*/}
                                        <Button onClick={e=>handleDelete(d.id)} className='btn btn-success m-2'>Eliminar</Button>
                                        
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>

            </table>
                        
        </div>
  
        
   
    </div>

    

    
  )


}

export default Home
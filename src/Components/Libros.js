import React from 'react';
import '../CSS/Libros.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibrosContext} from '../Context/LibrosContext';

export default function Libros () {
    const {catalogo, agregar} = useContext(LibrosContext);
    return (
        <div className="Libreria">
            <h3>Libros disponibles</h3>
              {
                <Table>
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th>Titulo</th>
                    <th>Idioma</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    catalogo.map((element,index)=>{
                    return(<tr key={index}>
                      <td>{element.codigo}</td>
                      <td>{element.titulo}</td>
                      <td>{element.idioma}</td>
                      <td>{<Button variant="dark" disabled={element.desactivado} onClick={()=>agregar(element)}>Agregar</Button>}</td>
                      </tr>)
                    })
                  }
                </tbody>
                </Table>
              }
        </div>
    )
}
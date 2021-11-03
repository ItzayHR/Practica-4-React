import '../CSS/Lista.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibrosContext} from '../Context/LibrosContext';

const Lista = () =>{
    const {wishList, eliminar} = useContext(LibrosContext);
      return ( 
          <div className="Lista">
                  <h3>Lista de deseos</h3>
                    {
                      wishList.length===0   
                      ? 
                      <p>No hay libros disponibles aún.</p>
                      :
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
                            wishList.map((element,index)=>{
                            
                            return(<tr key={index}>
                              <td>{element.codigo}</td>
                              <td>{element.titulo}</td>
                              <td>{element.idioma}</td>
                              <td>{<Button variant="dark" onClick={()=>eliminar(element)}>Eliminar</Button>}</td>
                              </tr>)
                            })
                          }
                        </tbody>
                        </Table>
                    }
          </div>
       );
  }

  export default Lista;
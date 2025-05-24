import { Listado_Alumnos as lista } from "./Listado_alumnos";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export function Lista_Alumnos(){
    // useState que guarda los alumnos
    const [Lista, setLista] = useState([]);
    // useEffect que carga listado_alumnos
    useEffect(() => {
      setLista(lista)
    }, [])
return (
    <>
        {lista.map((lista) => (
            <ListGroup horizontal>
            <ListGroup.Item>{lista.nombre}  {lista.apellido}</ListGroup.Item>
            <ListGroup.Item>DNI: {lista.dni}</ListGroup.Item>
            <ListGroup.Item>Curso: {lista.curso}</ListGroup.Item>
            </ListGroup>
        ))}
    </>
)
}
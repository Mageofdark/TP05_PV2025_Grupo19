import { Listado_Alumnos as lista } from "./Listado_alumnos";
import { useEffect, useState } from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

export function Lista_Alumnos(){
    // useState que guarda los alumnos
    const [Lista, setLista] = useState([]);
    // useEffect que carga listado_alumnos
    useEffect(() => {
      setLista(lista)
    }, [])
return (
    <Container>
        <h2>Lista de Alumnos</h2>
        {lista.map((alumno) => (
            <ListGroup key={alumno.id} horizontal>
            <ListGroup.Item>{alumno.nombre}  {alumno.apellido}</ListGroup.Item>
            <ListGroup.Item>DNI: {alumno.dni}</ListGroup.Item>
            <ListGroup.Item>Curso: {alumno.curso}</ListGroup.Item>
            </ListGroup>
        ))}
    </Container>
)
}
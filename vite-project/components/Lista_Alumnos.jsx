import { Listado_Alumnos as lista } from "./Listado_alumnos";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // <-- usa react-router-dom

export const Detalles = () => {
    const { id } = useParams();
    const alumno = lista.find((alumno) => alumno.id === parseInt(id));
    if (!alumno) return <p>Alumno no encontrado</p>;
    return (
        <div>
            <h2>Detalles del Alumno</h2>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>DNI: {alumno.dni}</p>
            <p>Curso: {alumno.curso}</p>
            <p>Email: {alumno.email}</p>
            <p>Teléfono: {alumno.telefono}</p>
            <p>Domicilio: {alumno.domiciolio}</p>
        </div>
    );
};

export function Lista_Alumnos() {
    const [Lista, setLista] = useState([]);
    useEffect(() => {
        setLista(lista);
    }, []);
    return (
        <Container>
            <h2>Lista de Alumnos</h2>
            {Lista.map((alumno) => (
                <ListGroup key={alumno.id} horizontal>
                    <ListGroup.Item>
                        <Link to={`/Lista-Alumnos/${alumno.id}`}>
                            {alumno.nombre} {alumno.apellido}
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>DNI: {alumno.dni}</ListGroup.Item>
                    <ListGroup.Item>Curso: {alumno.curso}</ListGroup.Item>
                </ListGroup>
            ))}
        </Container>
    );
}
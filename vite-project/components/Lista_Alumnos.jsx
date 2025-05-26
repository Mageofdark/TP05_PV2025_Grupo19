import { useState } from "react"; 
import { Container, ListGroup, Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // <-- usa react-router-dom

export function Editar ( { Lista, setLista } ) {
    const { id } = useParams();
    const alumno = Lista.find((alumno) => alumno.id === parseInt(id));
    if (!alumno) return <p>Alumno no encontrado</p>;

    const [nombre, setNombre] = useState(alumno.nombre);
    const [apellido, setApellido] = useState(alumno.apellido);
    const [dni, setDni] = useState(alumno.dni);
    const [curso, setCurso] = useState(alumno.curso);
    const [email, setEmail] = useState(alumno.email);
    const [domicilio, setDomicilio] = useState(alumno.domicilio);
    const [telefono, setTelefono] = useState(alumno.telefono);

    const handleEditar = () => {
        const newAlumno = {
            id: parseInt(id),
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            curso: curso,
            email: email,
            domicilio: domicilio,
            telefono: telefono,
        };
        const newLista = Lista.map((x) => {
            if(x.id !== parseInt(id)) return x;
            return newAlumno;
        })

        setLista(newLista);

        alert("Los cambios se guardaron correctamente");
    }

    return (
        <>
            <Link to={'/Lista-Alumnos'}> Volver </Link>
            <Form>
                <Form.Label> ID: </Form.Label>
                <Form.Control type="number" readOnly defaultValue={id}/>
                
                <Form.Label> Nombre </Form.Label>
                <Form.Control type="text" placeholder="Nombre" defaultValue={alumno.nombre} onChange={(e) => setNombre(e.target.value)}/>

                <Form.Label> Apellido </Form.Label>
                <Form.Control type="text" placeholder="Apellido" defaultValue={alumno.apellido} onChange={(e) => setApellido(e.target.value) }/>

                <Form.Label> Dni </Form.Label>
                <Form.Control type="number" placeholder="Dni" defaultValue={alumno.dni} onChange={(e) => setDni(e.target.value)}/>

                <Form.Label> Curso </Form.Label>
                <Form.Control type="text" placeholder="Curso" defaultValue={alumno.curso} onChange={(e) => setCurso(e.target.value)}/>

                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="Email" defaultValue={alumno.email} onChange={(e) => setEmail(e.target.value)}/>
                
                <Form.Label> Domicilio </Form.Label>
                <Form.Control type="text" placeholder="Domicilio" defaultValue={alumno.domicilio} onChange={(e) => setDomicilio(e.target.value)}/>

                <Form.Label> Telefono </Form.Label>
                <Form.Control type="number" placeholder="Telefono" defaultValue={alumno.telefono} onChange={(e) => setTelefono(e.target.value)}/>

                <Button onClick={handleEditar}> Guardar Cambios </Button>
            </Form>
        </>
    )
}

export const Detalles = ( { Lista }) => {
    const { id } = useParams();
    const alumno = Lista.find((alumno) => alumno.id === parseInt(id));
    if (!alumno) return <p>Alumno no encontrado</p>;
    return (
        <div>
            <Link to={'/Lista-Alumnos'}> Volver </Link>
            <h2>Detalles del Alumno</h2>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>DNI: {alumno.dni}</p>
            <p>Curso: {alumno.curso}</p>
            <p>Email: {alumno.email}</p>
            <p>Teléfono: {alumno.telefono}</p>
            <p>Domicilio: {alumno.domicilio}</p>
        </div>
    );
};

export function Lista_Alumnos( { Lista }) {
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
                    <ListGroup.Item>
                        <Link to={`/Lista-Alumnos/${alumno.id}/editar`}>
                            <Button variant="outline-primary" size="sm"> Modificar </Button>
                        </Link>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </Container>
    );
}
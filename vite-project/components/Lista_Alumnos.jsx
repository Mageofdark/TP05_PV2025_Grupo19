import { useAlumnos } from './AlumnosCont.jsx';
import { useState } from 'react';
import { Container, ListGroup, Button, Form, Card, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export function Editar() {
  const { id } = useParams();
  const { alumnos, setAlumnos } = useAlumnos();

  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id));
  if (!alumno) return <p>Alumno no encontrado</p>;

  const [nombre, setNombre] = useState(alumno.nombre);
  const [apellido, setApellido] = useState(alumno.apellido);
  const [dni, setDni] = useState(alumno.dni);
  const [curso, setCurso] = useState(alumno.curso);
  const [email, setEmail] = useState(alumno.email);
  const [domicilio, setDomicilio] = useState(alumno.domicilio);
  const [telefono, setTelefono] = useState(alumno.telefono);

  const handleEditar = () => {
    const nuevoAlumno = {
      id: alumno.id,
      nombre,
      apellido,
      dni,
      curso,
      email,
      domicilio,
      telefono,
    };

    const nuevaLista = alumnos.map((a) =>
      a.id === alumno.id ? nuevoAlumno : a
    );
    setAlumnos(nuevaLista);

    alert('Los cambios se guardaron correctamente');
  };

  return (
    <>
    <Card className='bg-light p-4 mt-4'>
      <div className="d-flex gap-2 mt-3">
          <Button variant="outline-secondary" onClick={() => window.history.back()}>
            Volver
          </Button>
        </div>
      <Form>
        <Form.Label> ID: </Form.Label>
        <Form.Control type='number' readOnly defaultValue={id} className='bg-white'/>
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Nombre </Form.Label>
          <Form.Control
            type='text'
            placeholder='Nombre'
            defaultValue={alumno.nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Apellido </Form.Label>
          <Form.Control
            type='text'
            placeholder='Apellido'
            defaultValue={alumno.apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Dni </Form.Label>
          <Form.Control
            type='number'
            placeholder='Dni'
            defaultValue={alumno.dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Curso </Form.Label>
          <Form.Control
            type='text'
            placeholder='Curso'
            defaultValue={alumno.curso}
            onChange={(e) => setCurso(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Email </Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            defaultValue={alumno.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Domicilio </Form.Label>
          <Form.Control
            type='text'
            placeholder='Domicilio'
            defaultValue={alumno.domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className='mb-3 bg-white p-3 rounded'>
          <Form.Label> Telefono </Form.Label>
          <Form.Control
            type='number'
            placeholder='Telefono'
            defaultValue={alumno.telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex gap-2 mt-3">
          <Button variant="outline-secondary" onClick={() => window.history.back()}>
            Cancelar
          </Button>
          <Button variant="secondary" onClick={handleEditar}>
            Guardar Cambios
          </Button>
        </div>
      </Form>  
    </Card>
      
    </>
  );
}

export const Detalles = () => {
  const { id } = useParams();
  const { alumnos } = useAlumnos();
  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id));
  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <Card className='bg-light p-4 mt-4'>
        <div className="d-flex gap-2 mt-3">
          <Button variant="outline-secondary" onClick={() => window.history.back()}>
            Volver
          </Button>
        </div>
        <h2>Detalles del Alumno</h2>
        <ListGroup>
          <ListGroup.Item>Nombre: {alumno.nombre}</ListGroup.Item>
          <ListGroup.Item>Apellido: {alumno.apellido}</ListGroup.Item>
          <ListGroup.Item>DNI: {alumno.dni}</ListGroup.Item>
          <ListGroup.Item>Curso: {alumno.curso}</ListGroup.Item>
          <ListGroup.Item>Email: {alumno.email}</ListGroup.Item>
          <ListGroup.Item>Teléfono: {alumno.telefono}</ListGroup.Item>
          <ListGroup.Item>Domicilio: {alumno.domicilio}</ListGroup.Item>
        </ListGroup>
    </Card>
  );
};

export function Lista_Alumnos() {
  const { alumnos, setAlumnos } = useAlumnos();
  const eliminarAlumno = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este alumno?')) {
      setAlumnos(alumnos.filter(alumno => alumno.id !== id));
    }
  };
  return (
    <Container className='p-4 rounded'>
      <h2>Lista de Alumnos</h2>
      {alumnos.map((alumno) => (
        <ListGroup key={alumno.id} horizontal className='mb-2 '>
          <ListGroup.Item className='border-1'>
            <Link to={`/Lista-Alumnos/${alumno.id}`}>
              {alumno.nombre} {alumno.apellido}
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className='border-1'>DNI: {alumno.dni}</ListGroup.Item>
          <ListGroup.Item className='border-1'>Curso: {alumno.curso}</ListGroup.Item>
          <ListGroup.Item className='broder-1'>
            <Link to={`/Lista-Alumnos/${alumno.id}/editar`}>
              <Button variant='outline-secondary' size='sm' className='me.2'>
                Modificar
              </Button>
            </Link>
             <Button 
              className='border-0'
              variant="outline-danger" 
              size='sm'
              onClick={() => eliminarAlumno(alumno.id)}
            >
              Eliminar
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
}
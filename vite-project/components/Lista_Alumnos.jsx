import { useAlumnos } from './AlumnosCont.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, ListGroup, Button, Form, Card, ListGroupItem, Row, Col, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { alumnos, setAlumnos } = useAlumnos();

  const alumno = alumnos.find((alumno) => alumno.id === parseInt(id));
  if (!alumno) return <p>Alumno no encontrado</p>;

  const [ alumnoEdit, setAlumnoEdit ] = useState({...alumno});

  const handleChange = (e) => {
    setAlumnoEdit({ ...alumnoEdit, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaLista = alumnos.map((a) =>
      a.id === alumnoEdit.id ? alumnoEdit : a
    );
    setAlumnos(nuevaLista);

    alert('Los cambios se guardaron correctamente');
    navigate("/Lista-Alumnos");
  };

  return (
    <>
    <Container className="mt-4 bg-light p-4 rounded">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="border-white shadow">
            <Card.Header as="h5" className="text-center bg-secondary text-white">
              Editar Alumno
            </Card.Header>
            <Card.Body className="bg-white">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                    type='text'
                    readOnly
                    value={alumnoEdit.id}
                    className='bg-light border-dark'
                    />
                  </Form.Group>
                  <Row>
                      {Object.keys(alumnoEdit).filter((campo) => campo !== "visible" && campo !== "id").map((campo) => (
                        <Col md={6} key={campo}>
                          <Form.Group className="mb-3" controlId={campo} key={campo}>
                            <Form.Label className="text-dark">
                              {campo.charAt(0).toUpperCase() + campo.slice(1)}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name={campo}
                                value={alumnoEdit[campo]}
                                onChange={handleChange}
                                required
                                className="border-dark"
                              />
                            </Form.Group>
                        </Col>
                  ))}
                </Row>
                <div className="d-grid gap-2 d-ms-flex justify-content-md-end mt-3 bg-light rounded">
                  <Button variant="danger" onClick={() => navigate("/Lista-Alumnos")}>
                    Cancelar
                  </Button>
                </div>
                <div className="d-grid gap-2 d-ms-flex justify-content-md-end mt-3 bg-light rounded">
                  <Button variant="secondary" type="submit">
                    Guardar Cambios
                  </Button>   
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
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
          <ListGroup.Item>ID: {alumno.id}</ListGroup.Item>
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

  const handleEliminar = (id) => {
    const confirmation = window.confirm("¿Estás seguro de que deseas eliminar este alumno?");
    if(!confirmation) return;

    const newAlumnos = alumnos.map((e) => 
      e.id === id ? {...e, visible: false} : e
    )
    setAlumnos(newAlumnos);
  }

  return (
    <Container className='p-4 rounded'>
      <h2>Lista de Alumnos</h2>
      {alumnos.map((alumno) => alumno.visible && (
        <ListGroup key={alumno.id} horizontal className='m-2 '>
          <ListGroup.Item className='border-1'>
  
              {alumno.nombre} {alumno.apellido}

          </ListGroup.Item>
          <ListGroup.Item className='border-1'>DNI: {alumno.dni}</ListGroup.Item>
          <ListGroup.Item className='border-1'>Curso: {alumno.curso}</ListGroup.Item>
          <ListGroup.Item className='border-1'>
            <Link to={`/Lista-Alumnos/${alumno.id}/editar`}>
              <Button variant='outline-secondary' size='sm' className='m-2'>
                Modificar
              </Button>
            </Link>
            <Link to={`/Lista-Alumnos/${alumno.id}`} >
              <Button variant='info' size='sm' className='m-2'>
                Mas Detalles
              </Button>
            </Link>
            <Button onClick={() => handleEliminar(alumno.id)} variant='danger' size='sm' className='m-2'>
              Eliminar
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
}
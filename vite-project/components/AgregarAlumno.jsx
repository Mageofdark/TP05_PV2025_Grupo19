import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { useAlumnos } from "./AlumnosCont.jsx";

function AgregarAlumno() {
  const navigate = useNavigate();
  const { agregarAlumno } = useAlumnos();
  const [alumno, setAlumno] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    curso: "",
    email: "",
    telefono: "",
    domicilio: "",
    visible: true,
  });
  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarAlumno(alumno);
    alert("Alumno agregado exitosamente");
    navigate("/Lista-Alumnos");
  };

  return (
    <Container className="mt-4 bg-light p-4 rounded">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="border-white shadow">
            <Card.Header as="h5" className="text-center bg-secondary text-white">Agregar Nuevo Alumno</Card.Header>
            <Card.Body className="bg-white">
                <Form onSubmit={handleSubmit}>
                  <Row>
                      {Object.keys(alumno).filter((campo) => campo !== "visible").map((campo) => (
                        <Col md={6} key={campo}>
                          <Form.Group className="mb-3" controlId={campo} key={campo}>
                            <Form.Label className="text-dark">
                              {campo.charAt(0).toUpperCase() + campo.slice(1)}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name={campo}
                                value={alumno[campo]}
                                onChange={handleChange}
                                required
                                className="border-dark"
                              />
                            </Form.Group>
                        </Col>
                  ))}
                </Row>
                <div className="d-grid gap-2 d-ms-flex justify-content-md-end mt-3 bg-light rounded">
                  <Button variant="secondary" type="submit">
                    Guardar
                  </Button>   
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarAlumno;

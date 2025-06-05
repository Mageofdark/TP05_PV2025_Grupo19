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
  const [errores, setErrores] = useState({});

  const validar = () => {
    const newErrors = {};
    if (!alumno.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!alumno.apellido) newErrors.apellido = "El apellido es obligatorio";
    if (!alumno.dni || isNaN(alumno.dni))
      newErrors.dni = "DNI válido requerido";
    if (!alumno.curso) newErrors.curso = "El curso es obligatorio";
    if (!alumno.email || !/\S+@\S+\.\S+/.test(alumno.email))
      newErrors.email = "Email válido requerido";
    if (!alumno.telefono || isNaN(alumno.telefono))
      newErrors.telefono = "Teléfono válido requerido";
    if (!alumno.domicilio) newErrors.domicilio = "El domicilio es obligatorio";
    return newErrors;
  };

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresVal = validar();
    setErrores(erroresVal);
    if (Object.keys(erroresVal).length > 0) return;
    agregarAlumno(alumno);
    alert("Alumno agregado exitosamente");
    navigate("/Lista-Alumnos");
  };

  return (
    <Container className="mt-4 bg-light p-4 rounded">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="border-white shadow">
            <Card.Header
              as="h5"
              className="text-center bg-secondary text-white"
            >
              Agregar Nuevo Alumno
            </Card.Header>
            <Card.Body className="bg-white">
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  {Object.keys(alumno)
                    .filter((campo) => campo !== "visible")
                    .map((campo) => (
                      <Col md={6} key={campo}>
                        <Form.Group
                          className="mb-3"
                          controlId={campo}
                          key={campo}
                        >
                          <Form.Label className="text-dark">
                            {campo.charAt(0).toUpperCase() + campo.slice(1)}
                          </Form.Label>
                          <Form.Control
                            type={campo === "email" ? "email" : campo === "dni" || campo === "telefono" ? "number" : "text"}
                            name={campo}
                            value={alumno[campo]}
                            onChange={handleChange}
                            isInvalid={!!errores[campo]}
                            className="border-dark"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errores[campo]}
                          </Form.Control.Feedback>
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
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
    <Container>
      <h2>Agregar Alumno</h2>
      <Form onSubmit={handleSubmit}>
        {Object.keys(alumno).map((campo) => (
          <Form.Group className="mb-3" controlId={campo} key={campo}>
            <Form.Label>{campo.charAt(0).toUpperCase() + campo.slice(1)}</Form.Label>
            <Form.Control
              type="text"
              name={campo}
              value={alumno[campo]}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
}

export default AgregarAlumno;

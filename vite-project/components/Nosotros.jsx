import { Card, Col, Container, Row } from "react-bootstrap"
function Nosotros(){
    return (
        <Container className="mt-4">
                <h1>Integrantes</h1>
            <Row className="mt-4">
                <Col md={6} lg={4} className="mb-4">
                    <Card  
                    bg="light"
                    text='dark'
                    className="mb-2"
                    >
                        <Card.Body>
                            <Card.Title>Ignacio Apaza</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Usuario de Github: ApazaIgnacio</Card.Subtitle>
                            <Card.Text>Estudiante de la Escuela de Minas</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card  
                    bg="light"
                    text='dark'
                    className="mb-2"
                    >
                        <Card.Body>
                            <Card.Title>Lucas Figueroa</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Usuario de Github: mikluha12 </Card.Subtitle>
                            <Card.Text>Estudiante de la Escuela de Minas</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card  
                    bg="light"
                    text='dark'
                    className="mb-2"
                    >
                        <Card.Body>
                            <Card.Title>Ignacio Huanca</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Usuario de Github: Ignacio367 </Card.Subtitle>
                            <Card.Text>Estudiante de la Escuela de Minas</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card  
                    bg="light"
                    text='dark'
                    className="mb-2"
                    >
                        <Card.Body>
                            <Card.Title>Enrique Real</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Usuario de Github: Mageofdark </Card.Subtitle>
                            <Card.Text>Estudiante de la Escuela de Minas</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="mb-4">
                    <Card  
                    bg="light"
                    text='dark'
                    className="mb-2"
                    >
                        <Card.Body>
                            <Card.Title>Matias Velazquez</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Usuario de Github: matias12131 </Card.Subtitle>
                            <Card.Text>Estudiante de la Escuela de Minas</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Nosotros
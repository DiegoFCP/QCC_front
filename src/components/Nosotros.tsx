import './Nosotros.css'
import { Container, Row, Col, Card, CardBody, CardText } from 'react-bootstrap';
import { FaUsersCog } from 'react-icons/fa';

function Nosotros() {
    return(
        <section id="Nosotros" className="Nosotros-section">
            <Container>
                <Row className='text-center mb-4'>
                    <h2 className='titulo'>Sobre Nosotros</h2>
                    <p className='subtitulo'>
                        En QCC nos apasiona conectar calidad con compromiso. Somos una comunidad orientada a soluciones tecnológicas.
                    </p>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card className='text-center mb-3'>
                            <CardBody>
                                <CardText>
                                    Fundada en 2024, QCC nace con la visión de simplificar procesos a través del desarrollo ágil y el enfoque en el usuario.
                                </CardText>
                                <CardText>
                                    Nuestra misión es proporcionar experiencias digitales eficientes, intuitivas y escalables para todo tipo de proyectos.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='text-center mb-3 shadow-sm'>
                            <CardBody>
                                <FaUsersCog className="icon" size={100} color="#60a5fa"/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )

    
};


export default Nosotros;
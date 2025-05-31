import { Container, Row, Col, Card} from "react-bootstrap";
import './Features.css'
import { FaRobot, FaChartLine} from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

function Features(){
    return(
        <section className="features" id="caracteristicas">
            <Container>
                <h2 className="text-center mb-5">Caracteristicas principales</h2>
                <Row>
                    <Col md={4} xs={12} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <FaRobot size={40} color="#60a5fa" aria-label="Automatización" />
                                <Card.Title>Automatización</Card.Title>
                                <Card.Text>
                                Procesos optimizados que reducen el trabajo manual y los errores humanos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <FaUsersLine size={40} color="#60a5fa" aria-label="Interfaz Amigable"/>
                                <Card.Title>Interfaz Amigable</Card.Title>
                                <Card.Text>
                                    Una experiencia clara e intuitiva para cualquier tipo de usuario.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xs={12} className="mb-4">
                        <Card className="feature-card">
                            <Card.Body>
                                <FaChartLine size={40} color="#60a5fa" aria-label="Escalable"/>
                                <Card.Title>Escalable</Card.Title>
                                <Card.Text>
                                    Diseñado para crecer junto a tu organización o flujo de trabajo.
                                </Card.Text>
                            </Card.Body>
                        </Card>    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Features;
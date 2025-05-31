import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

function Hero(){
    return(
        <section className="hero" id="inicio">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1 className="hero-tittle">Bienvenido a QCC</h1>
                        <p className="hero-subtittle">
                            Optimiza tu flujo de calidad con una solución moderna, simple y eficiente.
                        </p>
                        <Button variant="success" size="lg">
                            Comienza ahora
                        </Button>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        <img 
                            src="/assets/imgs/logo.png"
                            alt="ilustracion hero"
                            className="hero-img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Hero;
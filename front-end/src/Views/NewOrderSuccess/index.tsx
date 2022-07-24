import { Container, Row, Col } from "react-bootstrap";
import { CustomButton } from "../../Components/CustomButton";
import { Layout } from "../../Components/Layout";
import { PageTitle } from "../../Components/PageTitle";

export function NewOrderSuccessView() {
    return (
        <Layout>
            <Container className="text-center mb-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <PageTitle>Pedido recebido com sucesso!</PageTitle>
                        <p>Entraremos em contacto consigo pelo seu Telemóvel e E-mail com os detalhes do Estafeta que irá realizar a sua entrega.</p>
                        <CustomButton size="lg">Fazer outro Pedido</CustomButton>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
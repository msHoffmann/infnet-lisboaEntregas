import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../Components/Layout";
import { PageTitle } from "../../Components/PageTitle";
import { EstimateDetails } from "./EstimateDetails";
import { EstimateForm } from "./EstimateForm";

export function NewOrderView() {
    return (
        <Layout>
            <Container>
                <PageTitle>Novo Pedido</PageTitle>
                <Row className="mb-5 px-2" >
                    <Col xs={12} md={6} lg={7} className='p-0 px-md-3'>
                        <EstimateForm />
                    </Col>
                    <Col xs={12} md={6} lg={5} className='p-0 px-md-3'>
                        <EstimateDetails />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
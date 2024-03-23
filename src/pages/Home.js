import { Button, Col, Container, Row } from 'react-bootstrap';

function Home() {
    return (
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <Button>Test</Button>
            </Col>
          </Row>
        </Container>
    )
}

export default Home;
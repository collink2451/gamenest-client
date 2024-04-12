import { Button, Col, Container, Row } from 'react-bootstrap';
import { Example } from '../components';

function Home() {
    return (
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <Button>Test</Button>
              <Example />
            </Col>
          </Row>
        </Container>
    )
}

export default Home;
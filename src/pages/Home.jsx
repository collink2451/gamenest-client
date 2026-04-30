import { Container, Row } from 'react-bootstrap';
import * as S from "../styles/Styles";

function Home() {
  return (
    <Container>
      <Row>
        <S.GameBox to="/battleship">
          <S.GameBoxBackgroundImage $url="/img/battleship/battleship.png" $darken />
          <S.GameBoxLabel>Battleship</S.GameBoxLabel>
        </S.GameBox>
      </Row>
    </Container>
  );
}

export default Home;

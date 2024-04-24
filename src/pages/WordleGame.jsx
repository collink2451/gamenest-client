import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const api = 'https://random-word-api.herokuapp.com/word?length=5'

const WordleGame = () => {
    const [word, setWord] = useState([])

    function getWord() {
        fetch(api)
            .then(response => response.json())
            .then(data => setWord(data))
            .catch(err => console.error("Error fetching word: ", err))
        console.log(word)
    }
   
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Wordle Game</h1>
                    <button onClick={getWord}>Start Game</button>
                </Col>
            </Row>
        </Container>
    );
};

export default WordleGame;
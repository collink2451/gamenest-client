import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const api = 'https://random-word-api.herokuapp.com/word?length=5'

const WordleGame = () => {
    const [word, setWord] = useState([])
    
    async function getWord() {
        fetch(api)
            .then(response => response.json())
            .then(data => setWord(data[0]))
            .catch(err => console.error("Error fetching word: ", err))
        console.log(word)
    }

    useEffect(() => {
        getWord()
     }, []);
    
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to Wordle!</h1>
                    <button onClick={getWord}>Start Game</button>
                </Col>
            </Row>
        </Container>
    );
};

export default WordleGame;
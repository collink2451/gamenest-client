import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/WordleStyle.css';

const wordApi = 'https://random-word-api.herokuapp.com/word?length=5'
const defnApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/'      // + word



const WordleGame = () => {
    const [word, setWord] = useState('?????')
    const [defn, setDefn] = useState([])
    const [guess, setGuess] = useState("wordy")
    const [isValid, setIsValid] = useState(false)

    async function getWord() {
        fetch(wordApi)
            .then(response => response.json())
            .then(data => setWord(data[0]))
            .catch(err => console.error("Error fetching word: ", err))

        console.log(checkIfValid())
    }

    async function getDefn() {
        fetch(defnApi + guess)
            .then(response => response.json())
            .then((data) => {
                setDefn(data[0].meanings[0].definitions[0].definition);
                setIsValid(true)
            })
            .catch((error) => {
                console.log(error);
                setIsValid(false)
              })

    } 

    function checkIfValid() {
        getDefn()
        return isValid
    }
    
    
    return (
        <div>
            <div className="header">
                <h1 className="title">WORDLE</h1>
                <button onClick={getWord}>Start Game</button>
                <p>Word: {word}</p> 
                <p>Definition: {defn}</p>
                <button onClick={checkIfValid}>Test</button>
            </div> 
            <Container>
            
            </Container>
        </div>
    );
};

export default WordleGame;
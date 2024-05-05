import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import '../styles/WordleStyle.css';

const wordApi = 'https://random-word-api.herokuapp.com/word?length=5'
const defnApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/'      // + word



const WordleGame = () => {
    const [word, setWord] = useState('?????')
    const [defn, setDefn] = useState([])
    const [guess, setGuess] = useState("wordy")
    const [isValid, setIsValid] = useState(false)
    const [inGame, setInGame] = useState(false)

    async function getWord() {
        fetch(wordApi)
            .then(response => response.json())
            .then(data => setWord(data[0]))
            .catch(err => console.error("Error fetching word: ", err))
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
        console.log(isValid)
        return isValid
    }

    function startGame() {
        getWord()
        setInGame(true)
    }
    
    
    return (
        <div>
            <div className="header">
                <h1 className="title">WORDLE</h1>
                <div className="gameArea">
                    { !inGame &&
                        <Button variant="outline-success" size="xxl" onClick={startGame}>Start Game</Button>
                    }
                    
                    { inGame &&
                        <div>
                            <h1>Game: {word}</h1>
                            <p>This feature is under construction</p>
                        </div>
                    }
                </div>
            </div> 
        </div>
    );
};


export default WordleGame;
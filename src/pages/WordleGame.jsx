import React, { useState, useEffect, createContext } from 'react'
import { Button } from 'react-bootstrap'
import WordleBoard from './Wordle/Board'
import DefaultBoard from './Wordle/DefaultBoard'
import '../styles/WordleStyle.css'

export const AppContext = createContext()

const wordApi = 'https://random-word-api.herokuapp.com/word?lang=en&length=5'
const defnApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/'      // + word



const WordleGame = () => {
    const [word, setWord] = useState('?????')
    const [defn, setDefn] = useState([])
    const [guess, setGuess] = useState("wordy")
    const [isValid, setIsValid] = useState(false)
    const [inGame, setInGame] = useState(false)
    const [attempt, setAttempt] = useState({ word: 0, letter: 0})
    const [currLetter, setCurrLetter] = useState([])
    const [board, setBoard] = useState(DefaultBoard)

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

    async function handleKeyDown(event) {
        const letter = event.key
        if (letter >= 'a' && letter <= 'z') {
            const tempBoard = [...board]
            tempBoard[attempt.word][attempt.letter] = letter.toUpperCase()
            setBoard(tempBoard)
            const newNum = attempt.letter + 1
            setAttempt({word: attempt.word, letter: newNum})
            console.log(board)
            
        } else {
            console.log("invalid input")
        }
    };

    useEffect(() => {
       document.addEventListener('keydown', handleKeyDown);
      }, []);
    
    
    return (
        <div>
            <div className="header">
                <h1 className="title">WORDLE</h1>
            </div>
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    attempt,
                    setAttempt,
                    word
                }}>

                <div className="gameArea">
                    { !inGame &&
                        <Button variant="outline-success" size="xxl" className="mt-5" onClick={startGame}>Start Game</Button>
                    }
                    { inGame &&
                        <div>
                            <WordleBoard />
                            <h1>{word}</h1>
                        </div>
                    }
                </div>
            </AppContext.Provider>
        </div>
    )
}


export default WordleGame
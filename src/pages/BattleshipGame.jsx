import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Board } from '../components/Battleship';

const BattleshipGame = () => {
    const { lobbyId } = useParams();

    useEffect(() => {
        // Function to verify if the user is a part of the lobby
        verifyUserInLobby(lobbyId);
    }, [lobbyId]);

    const verifyUserInLobby = (lobbyId) => {
        // Your logic to verify if the user is a part of the lobby
        // This can be done using backend authentication
        console.log(`Verifying user in lobby ${lobbyId}`);
    };

    // Create an empty board full of 1s

    const boardJson = `{
    "player1": {
        "ships": [
            {
                "type": "carrier",
                "location": [0, 0],
                "rotated": false
            },
            {
                "type": "battleship",
                "location": [2, 0],
                "rotated": false
            },
            {
                "type": "destroyer",
                "location": [0, 8],
                "rotated": true
            },
            {
                "type": "submarine",
                "location": [6, 0],
                "rotated": false
            },
            {
                "type": "patrol boat",
                "location": [8, 0],
                "rotated": false
            }
        ],
        "board": [
            [null, null, "hit", null, null, null, null, null, "hit", null],
            [null, null, null, null, null, null, null, null, "hit", null],
            [null, null, null, null, null, null, null, null, "hit", null],
            [null, null, null, null, null, null, null, null, "miss", null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            ["hit", "hit", "hit", null, null, null, null, null, null, null],
            [null, null, null, null, null, null, "miss", null, null, null],
            [null, null, null, null, null, null, null, null, "miss", null],
            ["miss", null, null, null, null, null, null, null, null, null]
        ]
    }
}`;

    const player1 = JSON.parse(boardJson).player1;
    const board = player1.board;
    const ships = player1.ships;

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Battleship Game</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} className={`d-none d-lg-block`}></Col>
                <Col lg={4} md={8} sm={12}>
                    <Board board={board} ships={ships} />
                </Col>
            </Row>
        </Container>
    );
};

export default BattleshipGame;
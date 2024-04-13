import React from "react";
import { stringToShip } from "../../enums";
import BoardRow from "./BoardRow";

const Board = ({ board, ships, onClick }) => {

    function drawBoard() {
        ships.forEach(ship => {
            const [x, y] = ship.location;
            const length = stringToShip(ship.type).length;
            if (ship.rotated) {
                const sunk = board.map(row => row[y]).slice(x, x + length).every(cell => cell === "hit");
                for (let i = 0; i < length; i++) {
                    if (sunk) {
                        board[x + i][y] = "sunk";
                    }
                }
            } else {
                const sunk = board[x].slice(y, y + length).every(cell => cell === "hit");
                for (let i = 0; i < length; i++) {
                    if (sunk) {
                        board[x][y + i] = "sunk";
                    }
                }
            }
        });

        // get each row then create a BoardRow
        return board.map((row, rowIndex) => {
            return (
                <BoardRow row={row} rowIndex={rowIndex} />
            );
        });
    }


    return (
        <div>
            <h2>Board</h2>
            <div>
                {drawBoard()}
            </div>
        </div>
    );
};

export default Board;
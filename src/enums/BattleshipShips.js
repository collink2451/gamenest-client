const BattleshipShips = {
    CARRIER: {
        name: 'Carrier',
        length: 5,
    },
    BATTLESHIP: {
        name: 'Battleship',
        length: 4,
    },
    DESTROYER: {
        name: 'Destroyer',
        length: 3,
    },
    SUBMARINE: {
        name: 'Submarine',
        length: 3,
    },
    PATROL_BOAT: {
        name: 'Patrol Boat',
        length: 2,
    }
};

function stringToShip(ship) {
    switch (ship) {
        case 'carrier':
            return BattleshipShips.CARRIER;
        case 'battleship':
            return BattleshipShips.BATTLESHIP;
        case 'destroyer':
            return BattleshipShips.DESTROYER;
        case 'submarine':
            return BattleshipShips.SUBMARINE;
        case 'patrol boat':
            return BattleshipShips.PATROL_BOAT;
        default:
            return null;
    }
}

export default BattleshipShips;
export { stringToShip };


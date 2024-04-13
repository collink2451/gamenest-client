import React from 'react';

const Square = ({ value, onClick, state }) => {
    const [highlighted, setHighlighted] = React.useState(false);


    function onMouseOver() {
        setHighlighted(true);
    }

    function onMouseOut() {
        setHighlighted(false);
    }

    function getClasses() {
        let classes = "col square";

        if (state === "hit") {
            classes += " hit";
        } else if (state === "miss") {
            classes += " miss";
        } else if (state === "sunk") {
            classes += " sunk";
        }

        if (highlighted) {
            classes += " highlighted";
        }

        return classes;
    }

    return (
        <div className={getClasses()} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{value}</div>
    );
}

export default Square;
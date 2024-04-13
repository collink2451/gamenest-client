import { createGlobalStyle } from "styled-components";
import "./imports.css";

const GlobalStyle = createGlobalStyle`
    .square {
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding-left: 0;
        padding-right: 0;
    }

    .square:before{
        content: "";
        display: block;
        padding-top: 100%;
    }

    .highlighted {
        background-color: #6495ED !important;
    }

    .hit {
        background-color: #FF6347;
    }

    .miss {
        background-color: #d3d3d3;
    }

    .sunk {
        background-color: #000;
    }
`;

export default GlobalStyle;

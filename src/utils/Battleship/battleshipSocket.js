import { toast } from 'react-toastify';

let connection = null;

const getSocket = (lobbyId, user) => {
    if (user && !connection) {
        const socket = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_URL}?username=${user}&lobbyId=${lobbyId}`);

        socket.addEventListener("open", () => {
            console.log("Connected to server");
        });

        socket.addEventListener("error", (error) => {
            console.log("WebSocket error:", error);
            toast.error("WebSocket connection error. Please try again later.");
        });

        socket.addEventListener("close", (event) => {
            console.log("WebSocket connection closed:", event);
            toast.error("WebSocket connection closed. Please try again later.");
        });

        connection = socket;
    }
    return connection;
};

export default getSocket;

import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector, userSelector } from '../redux'; // Update this path according to your app

// Create a context for the socket connection
const SocketContext = createContext();

// Custom hook to access the socket connection
export const useSocket = () => useContext(SocketContext);

const BattleshipSocketProvider = ({ children }) => {
    const connection = useRef(null);
    const { lobbyId } = useParams();
    const user = useAppSelector(userSelector);

    useEffect(() => {
        if (user && !connection.current) {
            const socket = new WebSocket(`${process.env.REACT_APP_WEBSOCKET_URL}?username=${user.user}&lobbyId=${lobbyId}`);

            // Connection opened
            socket.addEventListener("open", (event) => {
                const message = {
                    type: "connect",
                    lobbyId: lobbyId,
                };
                socket.send(JSON.stringify(message));
                console.log("Connected to server");
            })

            // Listen for messages
            socket.addEventListener("message", (event) => {
                const message = JSON.parse(event.data);
                console.log("Message from server ", event.data);
                if (message.type && message.type === "error") {
                    toast.error(message.message);
                }
            })

            connection.current = socket;
        }
    }, [lobbyId, user]);

    return (
        <SocketContext.Provider value={connection.current}>
            {children}
        </SocketContext.Provider>
    );
};

export default BattleshipSocketProvider;
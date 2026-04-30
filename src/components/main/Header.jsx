import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { checkLogin, login, logout, useAppDispatch, useAppSelector, userSelector } from "../../redux";

function Header() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(userSelector);
    const [input, setInput] = useState('');

    React.useEffect(() => {
        dispatch(checkLogin());
    }, []);

    const handleLogin = () => {
        if (!input.trim()) return;
        dispatch(login(input.trim()));
        setInput('');
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Lewis Game Nest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/battleship">Battleship</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {user ? (
                    <>
                        <Navbar.Text className="me-3">Hello, {user}!</Navbar.Text>
                        <Button variant="outline-primary" onClick={() => dispatch(logout())}>Logout</Button>
                    </>
                ) : (
                    <>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                            className="me-2"
                            style={{ width: '180px' }}
                        />
                        <Button variant="outline-primary" onClick={handleLogin}>Play</Button>
                    </>
                )}
            </Container>
        </Navbar>
    );
}

export default Header;

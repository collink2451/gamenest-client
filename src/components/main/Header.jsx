import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { checkLogin, login, logout, useAppDispatch, useAppSelector, userSelector } from "../../redux";

function Header() {
    const [searchParams, setSearchParams] = useSearchParams();
    let code = searchParams.get("code") ?? undefined;
    const dispatch = useAppDispatch();
    const user = useAppSelector(userSelector);


    useEffect(() => {
        if (code) {
            dispatch(login({ code }));
            setSearchParams((p) => {
                p.delete("code");
                return p;
            });
            setInterval(() => {
                dispatch(checkLogin());
            }, 6300000); // 1h45m
        }

        return () => {
            setSearchParams((p) => {
                p.delete("code");
                return p;
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            code = undefined;
        };
    }, []);

    function GitHubLoginButton() {
        const loginWithGitHub = () => {
            window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_CALLBACK_URL}`;
        };
        if (user) {
            return <>
                <Navbar.Text>
                    <span>Hello, {user.user}!</span>
                </Navbar.Text>
                <Navbar.Text>
                    <span>&nbsp;&nbsp;</span>
                </Navbar.Text>
                <Nav.Link>
                    <Button onClick={() => dispatch(logout())}>Logout</Button>
                </Nav.Link>
            </>;
        }
        return <Nav.Link><Button onClick={loginWithGitHub}>Login with GitHub</Button></Nav.Link>;
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Lewis Game Nest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <GitHubLoginButton />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

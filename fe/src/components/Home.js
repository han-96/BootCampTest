import React, { useContext, useEffect} from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import authCtx from "../context/auth"


export const Home = () => {

    const history = useHistory();
    const {authUser} = useContext(authCtx) 


    const handleSignInClick = () => {
        history.push=("/auth/sign-up")
    }

    useEffect(()=> {
        if (authUser) {
            history.push("/feed")
        }
    }, [authUser, history])

    return (
        <div className="h-100 f-flex flex-column"> 
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">To Do List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/auth/sign-in">Sign in</Nav.Link>
                            <Nav.Link as={Link} to="/auth/sign-up">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="flex-grow-1" style={{background:"#ececec"}}>
                <Container className="d-flex h-100 | align-items-center justify-content-center">
                    <div className="text-center">
                        <h1>To Do List</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laborum.                  
                        </p>
                    </div>
                </Container>
            </div>         
        </div>
    )
}
import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../../ultis/axios";
import authCtx from "../../context/auth"

export const SignIn = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    const [err, setErr] = useState("");
    

    const {authUser, setAuthUser} = useContext(authCtx);


    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErr(false);
        
        if(!values.username || !values.password) {
            setErr("Username & password can't be empty");
           
        }
        try {
            const res = await axios.post('/auth/sign-in', values);
            const {jwt, user} = res.data;
            setAuthUser(user);
            localStorage.setItem("jwt", jwt)
        } catch (err) {
            setErr(err.message);
        } finally {

        }
    }

    return (
        <Card>
            <Card.Header>Sign Up</Card.Header>
            <Card.Body>
                <>  
                    {err && <Alert variant="danger">{err}</Alert> }
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username ..." name="username" value={values.username} onChange={handleChanges}/>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" name="password" value={values.password} onChange={handleChanges} />
                            </Form.Group>
 
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>

                            <p className="mt-3">
                                Don't have account? <Link to="/auth/sign-up">Sign Up</Link> now
                            </p>
                        </Form>
                </>)
                
            </Card.Body>
        </Card>
    )
}
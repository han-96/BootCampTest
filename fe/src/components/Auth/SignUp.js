import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "../../ultis/axios"


export const SignUp = () => {
    const [values, setValues] = useState ({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [err, setErr] = useState (null);
    const [isSucceeded, setIsSucceeded] = useState(false);

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErr(null);
        setIsSucceeded(false);
        if (!values.username) {
            setErr("Username cannot be empty");
            return;
        }

        if(!values.password) {
            setErr("Password cannot be empty");
            return;
        }

        console.log(values);
        if (values.confirmPassword !== values.password) {
            setErr("Confirm password not matched");
            return
        };
        try {
            await axios.post('/auth/sign-up', values);
            setIsSucceeded(true);
        } catch (err) {
            console.log(err);
            setErr(err.message);
        } 
    }

    return (
        <Card>
            <Card.Header>Sign Up</Card.Header>
            <Card.Body>
                <>
                    {err && <Alert variant="danger">{err}</Alert> }
                    {isSucceeded && <Alert variant="success">Sign up successfully</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter username ..."  name="username" onChange={handleChanges} value={values.username}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChanges} value={values.password} />
                        </Form.Group>       

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="confirmPassword" onChange={handleChanges} value={values.confirmPassword} />
                        </Form.Group>        
  
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>        

                        <p className="mt-3">
                                    Already have an account? <Link to="/auth/sign-in">Sign in</Link> now
                        </p>        
                    </Form>
                </>  
            </Card.Body>
        </Card>
    )
}
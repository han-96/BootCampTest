import React, { useContext, useEffect } from "react";
import { Container, Row, Col  } from "react-bootstrap"
import { Route, useHistory } from "react-router-dom"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import authCtx from "../../context/auth"


const Auth = () => {

    const{ authUser } = useContext(authCtx);
    const history = useHistory()

    useEffect(() => {
        if (authUser) {
            history.push('/feed')
        }
    }, [authUser, history])

    return (
        <Container className="h-100 pt-5">
            <div className="mb-5">              
                <Row>
                    <Col xs={12} lg={{ span: 6, offset: 3}} xl={{ span: 4, offset: 4}} >
                        <Route path="/auth/sign-up" component={SignUp} />
                        <Route path="/auth/sign-in" component={SignIn} />
                    </Col>
                </Row>
                

                 
            </div>     
        </Container>
        
    )    
}

export default Auth;
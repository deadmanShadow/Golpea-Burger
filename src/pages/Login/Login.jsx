import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext (AuthContext);
    const navigate = useNavigate();


    const handleLogIn = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);


        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/home')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <Container className='w-25 mx-auto mt-5'>
            <h3>Please Login</h3>
            <div>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <br />
                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                    <br />
                    <br />
                    <Form.Text className="text-success">
                    <Form.Text> Don't have an account?
                        <Link to="/register"> <span className='text-danger'>Register</span></Link>
                    </Form.Text>
                        </Form.Text>
                    <Form.Text className="text-danger">
                           
                        </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Login;
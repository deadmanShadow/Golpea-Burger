import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext); 

const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(form,name,photo,email,password)

    createUser(email,password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(error => {
        console.log(error)
    })

}

    return (
        <div>
            <Container className='w-25 mx-auto mt-5'>
            <h3>Register an account?</h3>
            <div>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required />
                      
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter your photo"/>
                      
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' label="Accept terms and condition" />
                    </Form.Group>
                    <br />
                    <Button variant="secondary" type="submit">
                        Register
                    </Button>
                <br />
                    <Form.Text className="text-success">
                    <Form.Text> Alredy have an account?
                        <Link to="/login"> <span className='text-danger'>Login</span></Link>
                    </Form.Text>
                        </Form.Text>
                    <Form.Text className="text-danger">
                           
                        </Form.Text>
                </Form>
            </div>
        </Container>
        </div>
    );
};

export default Register;
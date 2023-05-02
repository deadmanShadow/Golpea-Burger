import React from 'react';
import { Card} from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>What is the differences between uncontrolled and controlled components.</Card.Title>
                    <Card.Text>
                    Controlled components are components whose behavior and state are controlled by a parent component or by the application as a whole. The parent component or application manages the state of the controlled component and passes down any changes in state or behavior as props or callbacks. 
                    Uncontrolled components, on the other hand, maintain their own internal state and behavior. The parent component or application does not directly control their behavior or state. Uncontrolled components are typically used when the behavior or state of the component cannot be easily predicted in advance, such as in user input components like text inputs, checkboxes, or radio buttons.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>How to validate React props using PropTypes</Card.Title>
                    <Card.Text>
                    React provides a utility called PropTypes to validate the data types of props passed to a component. PropTypes helps you to catch common bugs and programming errors, and it is particularly useful in large-scale applications.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>What is the difference between nodejs and express js.</Card.Title>
                    <Card.Text>
                    The main difference between Node.js and Express.js is that Node.js is a runtime environment, while Express.js is a web framework. Node.js provides the platform for running JavaScript code on the server-side, while Express.js provides the tools and features for building web applications on top of Node.js.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                    <Card.Text>
                    In React, a custom hook is a function that allows you to reuse logic across multiple components. Custom hooks are similar to regular functions, but they have specific naming conventions and can access other React features like state, context, and lifecycle methods.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;
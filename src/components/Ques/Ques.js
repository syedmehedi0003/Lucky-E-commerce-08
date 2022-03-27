import React from 'react';
import './Ques.css';

const Ques = () => {
    return (
        <div className='ques-container'>
            <h4>React works:</h4>
            <p>React is a JavaScript library function,it is unidirectional and it is more flexible.That creates user interfaces in a predictable and efficient way using declarative code.React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.You can use it to help build single page applications and mobile apps, or to build complex apps. </p>



            <h4>useState Work:</h4>
            <p>useState is a Hook, it work asynchronously. That allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state.It changes its value by a user performance.</p>
        </div>
    );
};

export default Ques;
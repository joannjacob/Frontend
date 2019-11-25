
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



function Test(){
const [message, setMessage] = React.useState('niceeee!!');

function handleClick(){
setMessage('my new message');
}

return(
<div>
 <h1>{message}</h1>
 <button onClick={handleClick}>update message!</button>
 </div>
 );
}


ReactDOM.render(<App />, document.getElementById('root'));
/*
ReactDOM.render(<Test />, document.getElementById('root')); */

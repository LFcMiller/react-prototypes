import React from 'react';
import ReactDOM from 'react-dom';

let user = {
    name: "Cody",
    luckyNumber : luckyNumber()
};

function luckyNumber() {
    return Math.floor(Math.random()*1000)+1
};

function greeting(user) {
    return <div className="container">
        <h1>Welcome, {user.name}!</h1>
        <h2 className="text-muted">Your lucky number is: {user.luckyNumber}</h2>
    </div>
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
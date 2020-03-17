import React from 'react'
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

//JSX 記法
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    // index.html の root
    document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom';

// コンポーネントは大文字で始める
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);
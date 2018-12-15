import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello() {
    let phrase = "World";
    let symbol = "!";
    // let userName = "Kostya Yelskiy";
    let teacherName = "Ilya";
    let cityWhereIsUser = "Kyiv";
    return (
        <h1>{123123 * 2} Hello {phrase} {symbol} Have a nice day {teacherName}. Which weather is
            in {cityWhereIsUser}? </h1>
    )
}

function SayFullName(props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href="{props.link}">Link on my profile.</a>
        </div>
    )
}

ReactDOM.render(<SayFullName name="Kostya" surname="Yelskiy"
                             link="https://github.com/kor1k"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

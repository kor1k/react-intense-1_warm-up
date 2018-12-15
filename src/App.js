import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <SayFullName name="Kostya" surname="Yelskiy"
                             link="https://github.com/kor1k"/>
                <SayFullName name="Olya" surname="Trach"
                             link=""/>
                <SayFullName
                    name="Dasha" surname="Darina"
                    link=""/>
            </div>
        );
    }
}

function SayFullName(props) {
    return (
        <div>
            <h1>My name is {props.name}, surname - {props.surname}</h1>
            <a href="{props.link}">Link on my profile.</a>
        </div>
    )
}

export default App;

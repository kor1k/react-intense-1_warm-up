import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

const StyledCompCheck = styled.p`
  font-family: Roboto, sans-serif;
  color: orange;
  font-size: 8rem;
  text-align: center;
  margin-top: 10rem;
`

const StyledMainTitle = styled.p `
   font-family: Roboto, sans-serif;
   font-size: 12rem;
   text-align: center;
   margin-bottom: 10rem;
`

class App extends Component {
    render() {
        return (
            <div className="wrapper container text-success">
                <StyledMainTitle>Hello World! </StyledMainTitle>
                <SayFullName name="Kostya" surname="Yelskiy"
                             link="https://github.com/kor1k"/>
                <SayFullName name="Olya" surname="Olga"
                             link=""/>
                <SayFullName
                    name="Dasha" surname="Darina"
                    link=""/>
                <div className="test-block text-danger">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, eum?</h1>
                    <h2>U devochek links are not valid. A u menya valid! |Progers vs. Girl| |1:0|</h2>
                </div>
                <StyledCompCheck>
                    I like React.js.
                </StyledCompCheck>
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

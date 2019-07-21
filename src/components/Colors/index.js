import React, { Component } from "react";
import "./style.css";

const colors = [
    {
      id: 1,
      "background-color": 'red',
      color: 'red'
    },
    {
      id: 2,
      "background-color": 'orange',
      color: 'orange'
    },
    {
      id: 2,
      "background-color": 'blue',
      color: 'blue'
    },
    {
      id: 3,
      "background-color": 'green',
      color: 'green'
    },
    {
      id: 4,
      "background-color": 'yellow',
      color: 'yellow'
    },
    {
      id: 5,
      "background-color": 'purple',
      color: 'purple'
    },
    {
      id: 6,
      "background-color": 'indigo',
      color: 'indigo'
    },
    {
      id: 7,
      "background-color": 'violet',
      color: 'violet'
    },
    {
      id: 8,
      "background-color": 'LightSalmon ',
      color: 'LightSalmon'
  
    },
    {
      id: 9,
      "background-color": 'brown',
      color: 'brown'
    },
  ];

class Color extends Component {
    
    state = {
        colorsArray: colors,
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-light bg-light">
                    <h5>Clicky Game!</h5>
                    <h3 id="title">Click on a Color to begin</h3>
                    <h5>Score: {this.state.score} | Top Score: {this.state.topScore}</h5>
                </nav>
                <div className="container">
                    <img src={require('./images/283400.jpg')} alt="space"/>
                    <div className="centered">Clicky Game!</div>
                    <p className="instruction">Click on an image to earn points, but don't click on any more than once!</p>
                    <div className="container" id="colorGrid">
                        {this.state.colorsArray.map(color => {
                            return <div className="colorBox" style={color}>o</div>
                        })}
                    </div>
                </div>
            </div>

        );
    }
}


export default Color;
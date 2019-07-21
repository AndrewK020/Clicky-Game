import React, { Component } from "react";
import "./style.css";

const colors = [
    {
      id: 1,
      "backgroundColor": 'red',
      color: 'red'
    },
    {
      id: 2,
      "backgroundColor": 'orange',
      color: 'orange'
    },
    {
      id: 3,
      "backgroundColor": 'blue',
      color: 'blue'
    },
    {
      id: 4,
      "backgroundColor": 'green',
      color: 'green'
    },
    {
      id: 5,
      "backgroundColor": 'yellow',
      color: 'yellow'
    },
    {
      id: 6,
      "backgroundColor": 'purple',
      color: 'purple'
    },
    {
      id: 7,
      "backgroundColor": 'indigo',
      color: 'indigo'
    },
    {
      id: 8,
      "backgroundColor": 'violet',
      color: 'violet'
    },
    {
      id: 9,
      "backgroundColor": 'LightSalmon ',
      color: 'LightSalmon'
  
    },
    {
      id: 10,
      "backgroundColor": 'brown',
      color: 'brown'
    },
  ];

class Color extends Component {
    
    state = {
        colorsArray: colors,
        pickedArray: [],
        score: 0,
        topScore: 0
    };
    shuffle = (a)  => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    boxClick = (color_id) => {
        console.log(this.state);
        if(!this.state.pickedArray.includes(color_id)) {

            this.state.pickedArray.push(color_id);

            this.setState({
                colorsArray: this.shuffle(colors),
                pickedArray: this.state.pickedArray,
                score: this.state.score + 1,
                topScore: (this.state.score >= this.state.topScore) ? this.state.score + 1 : this.state.topScore
            });
        } else {
            this.setState({
                colorsArray: this.shuffle(colors),
                pickedArray: [],
                score: 0
            });
        }
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
                            return <div className="colorBox" key={color.id} style={color} onClick={()=>this.boxClick(color.id)}>o</div>
                        })}
                    </div>
                </div>
            </div>

        );
    }
}


export default Color;
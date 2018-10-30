import React from 'react';
import './App.css';

var printPoint = "o"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, point: "" }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState(
            { number: this.state.number + 1 }
          )
        }
        }>+</button>
        {console.log(this.state.number)}
        <button onClick={() => {
          this.setState({
            number: this.state.number - 1
          })
        }}>-</button>
        <p>{this.state.number}</p>
        <button onClick={() => {
          this.setState({
            point: this.state.point.concat(printPoint)
          })
        }}>add point</button>
        <button onClick={() => {
          this.setState({
            point: this.state.point.slice(1)
          })
        }}>remove</button>
        <p>Points: {this.state.point}</p>
      </div >
    );
  }
}

export default App;

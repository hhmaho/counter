import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 }
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
      </div >
    );
  }
}

export default App;

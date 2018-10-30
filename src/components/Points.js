import React from 'react';

var printPoint = "o"

class Points extends React.Component{
    constructor(props) {
        super(props);
        this.state = { point: "" }
      }
      render() {
        return (
          <div>
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

export default Points;
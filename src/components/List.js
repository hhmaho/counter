import React from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(4));
// const shuffleNumber = getRandomInt(4);

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {shuffle: getRandomInt(this.props.names.length) }
      }
      render() {
        return (
          <div>
          list<br/>
          {this.props.names[this.state.shuffle]}<br/>        <button onClick={() => {
          this.setState(
            { shuffle: getRandomInt(this.props.names.length) }
          )
        }
        }>shuffle</button>
          {/* {this.setState({ shuffle: this.props.names.map((name) => shuffleNumber })} */}
          </div >
        );
      }
}

export default List;
import React, { Component } from 'react';
import Heading from '../../src/components/heading';

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    console.clear()
  }
  handleClick() {
    console.clear()
    console.log(`foi clicado ${this.state.count + 1} vezes`)
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: 'black',
      minWidth: 300,
      marginTop: 20,
      textTransform: 'uppercase',
      border: 'none',
      color: 'white',
      outline: 'none',
      fontWeight: 'bold',
      fontSize: '2em'
    };
    return (
      <div>
        {this.state.count < 5 ?
          <div>
            <Heading size={5} textColor="black">
              o botão foi clicado {this.state.count} vezes
          </Heading>
            <button style={styles} type="button" onClick={this.handleClick}>Click Me</button>
          </div> :
          <Heading size={5} fit caps textColor="black">salve</Heading>
        }
      </div>
    );
  }
}

import React, { Component } from 'react';
class Cell extends Component {
  render() {
    return (
        <div className='container2__cell container3__cell  container4__cell'>
          {this.props.children}
        </div>
    );
  }
}

export default Cell;
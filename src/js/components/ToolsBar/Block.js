import React, { Component } from 'react';
class Block extends Component {
  render() {
    return (
        <div className='blocks__group-item'>
          {this.props.children}

        </div>
    );
  }
}

export default Block;
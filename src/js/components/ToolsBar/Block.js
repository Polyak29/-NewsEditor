import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from '../../initialState';
class Block extends Component {

  static propTypes = {
    handleClickBlock: PropTypes.func,
    children: PropTypes.element,
    type: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {type} = this.props;
    return (
        <div className='blocks__group-item'
             onClick={() => {
               this.props.handleClickBlock(type);
             }}
        >
          {this.props.children}
        </div>
    );
  }
}

export default Block;
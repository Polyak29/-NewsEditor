import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {onDown, onUp} from '../../initialState';

class ControlPanel extends Component {
  static propTypes = {
    onChangePosition: PropTypes.func,
    onRemove:  PropTypes.func,
    position: PropTypes.number,
    content: PropTypes.string,
    block: PropTypes.object
  };

  renderRowUp() {

  }

  render() {
    const { onRemove, position, onChangePosition } = this.props;

    return (
        <div className={'title__control control'} >
          <div className={'control__wrap'}>
            <div className={'control__sort'}>
              <i
                className="fas fa-chevron-down control__sort-up"
                onClick={() => {
                  onChangePosition(onDown, position);
                }}
              />
              <i
                className="fas fa-chevron-up control__sort-down"
                onClick={() => {
                  onChangePosition(onUp, position);
                }}
                />
            </div>
          </div>
          <div
            className={'control__close'}
            onClick={() => {
              onRemove(position);
            }}
          >
           <i className="fas fa-times"></i>
          </div>
      </div>
    );
  }
}

export default ControlPanel;


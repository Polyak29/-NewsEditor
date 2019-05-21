import React, { Component } from 'react';
import ControlPanel from "../ToolsBar/ControlPanel";
import PropTypes from "prop-types";

class Text extends Component {

  static propTypes = {
    control: PropTypes.bool,
    header: PropTypes.bool,
    onChangeText: PropTypes.func,
    onRemove:  PropTypes.func,
    onChangePosition: PropTypes.func,
    position: PropTypes.number,
    textValue: PropTypes.string
  };


  constructor(props){
    super(props);
  }

  renderControl() {
    const { control, onRemove, position, onChangePosition } = this.props;

    if (control) {
      return(
          <ControlPanel
              onChangePosition={onChangePosition}
              onRemove={onRemove}
              position={position}
          />
      );
    }
  }

  render() {

    return (
          <div className='text'>
            {this.renderControl()}
            <div className={'text__toolbar'}>
              <div className={'text__toolbar-item'}>
                <i className="fas fa-italic"></i>
              </div>
              <div className={'text__toolbar-item'}>
                <i className="fas fa-bold"></i>
              </div>
              <div className={'text__toolbar-item'}>
                <i className="fas fa-list-ul"></i>
              </div>
              <div className={'text__toolbar-item'}>
                <i className="fas fa-list-ol"></i>
              </div>
              <div className={'text__toolbar-item'}>
                <i className="fas fa-link"></i>
              </div>
              <div className={'text__toolbar-item item'}>
                <div className={'item__wrap'}>
                  <i className="fas fa-font item__wrap-icon"></i>
                  <div className={'item__wrap-select'}>
                    <i className="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
                className={'text__box'}
                contentEditable="true"
            />
          </div>
    );
  }
}

export default Text;
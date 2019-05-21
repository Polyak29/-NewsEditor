import React, { Component } from 'react';
import ControlPanel from '../ToolsBar/ControlPanel';
import ResizableTextarea from '../ToolsBar/ResizableTextarea';
import PropTypes from "prop-types";

class Title extends Component {
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

  componentWillUnmount() {
    console.error('componentWillUnmount ', this.props.position);
  }

  renderHeader() {
    const { header } = this.props;
    if (header) {
      return(
        <p className='title__header'>Заголовок</p>
      );
    }
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
    const {position, onChangeText, textValue} = this.props;
    return(
      <div className={'title'}>
        {this.renderHeader()}
        {this.renderControl()}
        <ResizableTextarea
            textValue={textValue}
          minRows={1}
          maxRows={10}
          position={position}
          onChangeText={onChangeText}
        />
      </div>
    );
  }
}

export default Title;
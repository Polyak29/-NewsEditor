import React, { Component } from 'react';
import ResizableTextarea from './ResizableTextarea';
import types from '../../initialState';

class Content extends Component {
  constructor(props){
    super(props);
  }

  renderBlocks() {
    const {blocks} = this.props;
    console.log(blocks);
    return blocks.map(this.renderBlock, this.index);
  }

  renderBlock(block, key) {

    switch (block.type) {
      case types.TITLE:
        return (
            <ResizableTextarea
                minRows={1}
                maxRows={10}
                key={key}
            />
        );

      case types.FIRST_TITLE:
        return (
          <ResizableTextarea
              minRows={1}
              maxRows={10}
              key={key}
          />
        );

      default:
        return null;
    }
  }

  render() {

    return (
        <div className='create__content content'>
          <div className='content__header'>
            Контент
          </div>
          <div className='content__title'>
            <p className='content__title-header'>Заголовок</p>
            <ResizableTextarea
                minRows={1}
                maxRows={10}
            />
          </div>
          <div className='content__border'></div>
          {this.renderBlocks()}
          <div className=''></div>
        </div>
    );
  }
}

export default Content;
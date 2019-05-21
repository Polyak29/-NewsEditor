import React, { Component } from 'react';
import BlockContents from './components/ToolsBar/BlockContents';
import Content from './components/ToolsBar/Content';
import ButtonBack from './components/ButtonBack';
import {onDown, onUp} from './initialState';
import { deepClone } from './utils';

class Create extends Component{

  state = {
    blocks: []
  };

  onChangeText = (position, content ) => {
    const blocks = deepClone(this.state.blocks);

    // let editBlocks = {...blocks};
    blocks[position].content = content;
    this.setState({"blocks": blocks});

  };

  handleClickBlock = (block) => {
    const blocks = deepClone(this.state.blocks);

    block.position = blocks.length;
    blocks.push(block);

    this.setState( {blocks} );
  };

  onRemove = (position) => {
    const blocks = deepClone(this.state.blocks);
    console.log('position', position);
    blocks.splice(position, 1);
    const sortBlocks = blocks.map(this.setPosition);
    this.setState({blocks: sortBlocks});


  };

  setPosition = (block, index) => {
    return {
      ...block,
      position: index
    };
  };

  onChangePosition = (type, position) => {
    const blocks = deepClone(this.state.blocks);
    switch (type) {
      case onDown: {
        [blocks[position], blocks[position+1]] = [blocks[position+1], blocks[position]];
        const sortBlocks = blocks.map(this.setPosition);
        this.setState({blocks: sortBlocks});
        break;
      }

      case onUp: {
        [blocks[position], blocks[position-1]] = [blocks[position-1], blocks[position]];
        const sortBlocks = blocks.map(this.setPosition);
        this.setState({blocks: sortBlocks});
        break;
      }
  }
  };

  render() {

    console.warn(this.state.blocks);

    return (
        <div className='create'>
          <BlockContents handleClickBlock={this.handleClickBlock} />
          <Content
            onChangePosition={this.onChangePosition}
            onRemove={this.onRemove}
            blocks={this.state.blocks}
            onChangeText={this.onChangeText}
          />
         <ButtonBack />
        </div>
    );

  }
}

export default Create;
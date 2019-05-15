import React, { Component } from 'react';
import BlockContents from './components/ToolsBar/BlockContents';
import Content from './components/ToolsBar/Content';
import ButtonBack from './components/ButtonBack';
import types from './initialState';

class Create extends Component{

  state = {
    blocks: []
  };

  handleClickBlock = (block) => {
    // const blocks = JSON.parse(JSON.stringify(this.state.blocks));
    const blocks = [...this.state.blocks];

    blocks.push(block);
    this.setState( {blocks});
  }

  render() {
    return (
        <div className='create'>
          <BlockContents handleClickBlock={this.handleClickBlock} />
          <Content blocks={this.state.blocks} />
         <ButtonBack />
        </div>
    );

  }
}

export default Create;
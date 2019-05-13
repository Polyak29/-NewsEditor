import React, { Component } from 'react';
import Block from './components/ToolsBar/Block';
import Content from './components/ToolsBar/Content';
import ButtonBack from "./components/ButtonBack";

class Create extends Component{
  render() {
    return (
        <div className='create'>
          <Block />
          <Content>
          </Content>
         <ButtonBack />
        </div>
    );

  }
}

export default Create;
import React, { Component } from 'react';
import Header from "./Header";
import Row from "./Row";

class Index extends Component {
  render() {
    return (
      <div className='table'>
        <Header />
        <Row id='1' title='Котики' date='06.05.2019' />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />

      </div>
    );
  }
}

export default Index;
import React, { Component } from 'react';
import Row from "./Row";
import Add from "./Add";


class Table extends Component {
  render() {
    return (
      <div className='table'>
        <Row />
        <Add/>
      </div>
    );
  }
}

export default Table;
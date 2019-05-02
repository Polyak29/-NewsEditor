import React, { Component } from 'react';
class Row extends Component {
  render() {
    return (
        <div className='table__row'>
          <div className='table__row-id'>ID</div>
          <div className='table__row-title'>Название</div>
          <div className='table__row-date'>Дата</div>
          <div className='table__row-edit'>Редактирование</div>
        </div>
    );
  }
}

export default Row;
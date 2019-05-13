import React, { Component } from 'react';
class Row extends Component {
  render() {
    const {id, title, date, edit} = this.props;

    return (
        <div className='table__row'>
          <div className='table__row-id'>{id}</div>
          <div className='table__row-title'>{title}</div>
          <div className='table__row-date'>{date}</div>
          <div className='table__row-edit'>{edit}</div>
        </div>
    );
  }
}

export default Row;
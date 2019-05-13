import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
        <div className='table__header'>
          <div className='table__header-id'>ID</div>
          <div className='table__header-title'>Название</div>
          <div className='table__header-date'>Дата</div>
          <div className='table__header-edit'>Редактирование</div>
        </div>
    );
  }
}

export default Header;
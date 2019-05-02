import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Create extends Component{
  render() {
    return (
        <div>
          <Link to='/'>Вернуться назад</Link>
          <p>Создание Новостей</p>
        </div>
    );

  }
}

export default Create;
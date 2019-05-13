import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Button extends Component {
  render() {
    return (
        <div className='button'>
          <Link to='/create'>
            <button className='button__add'>Добавить</button>
          </Link>
        </div>
    );
  }
}

export default Button;
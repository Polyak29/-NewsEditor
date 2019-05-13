import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ButtonBack extends Component {
  render() {
    return (
        <div className='button'>
          <Link to='/'>
            <button className='button__add'>Вернуться</button>
          </Link>
        </div>
    );
  }
}

export default ButtonBack;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Add extends Component {
  render() {
    return (
        <div className='table__add'>
          <Link to='/create'>
            <button className='table__add-style'>Добавить</button>
          </Link>
        </div>
    );
  }
}

export default Add;
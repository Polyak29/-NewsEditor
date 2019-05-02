import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
        <div className='table__pagination'>
          <div className='table__pagination-wrap'>
          <div className='table__pagination-last'>Предыдущая</div>
          <div className='table__pagination-first'>1</div>
          <div className='table__pagination-second'>2</div>
          <div className='table__pagination-third'>3</div>
          <div className='table__pagination-next'>Следующая</div>
          </div>
        </div>
    );
  }
}

export default Pagination;
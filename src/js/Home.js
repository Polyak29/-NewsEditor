import React, { Component } from 'react';
import Table from './components/table/Table';
import Pagination from './components/table/Pagination';

class Home extends Component{
  render() {
    return (
      <div className='container'>
        <h1  className='container__title'>НОВОСТИ</h1>
          <div>
            <Table />
            <Pagination />
          </div>
      </div>
    );

  }
}
export default Home;
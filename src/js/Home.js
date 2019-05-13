import React, { Component } from 'react';
import Table from './components/Table';
import Pagination from './components/Pagination';
import Button from './components/Button';

class Home extends Component{

  state = {
    currentPage: 1
  };

  handleChangePage = (page = 1) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className='container'>
        <h1  className='container__title'>НОВОСТИ</h1>
          <div>
            <Table/>
            <Pagination
                firstValue={1}
                countVisiblePage={3}
                countPage={8}
                current={currentPage}
                onChangePage={this.handleChangePage}
            />
          </div>
        <Button />
      </div>
    );

  }
}
export default Home;
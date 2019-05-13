import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {

  static propTypes = {
    current: PropTypes.number.isRequired,
    countVisiblePage: PropTypes.number.isRequired,
    countPage: PropTypes.number.isRequired,
    firstValue: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
  };

  static defaultProps = {};

  state = {
    active: false
  };

  constructor(props) {
    super(props);
  }

  toggle(e){
    this.setState({active: !this.state.active});
  }

  renderLeftDots() {
    const {countVisiblePage, current, countPage} = this.props;

    if (countPage === countVisiblePage) {
      return null;
    }

    if (current < countVisiblePage) {
      return null;
    }

    return (
        <div className='pagination__dots'>
          <i className="fas fa-ellipsis-h"></i>
        </div>
    );
  }

  renderRightDots() {
    const {current, countVisiblePage, countPage} = this.props;

    if (countPage === countVisiblePage) {
      return null;
    }

    if (current > countPage - countVisiblePage +1) {
      return null;
    }

    return (
        <div className='pagination__dots'>
          <i className="fas fa-ellipsis-h"></i>
        </div>
    );

  }

  renderStartPagination() {
    const {current, countVisiblePage, firstValue, countPage} = this.props;

    if (countPage === countVisiblePage) {
      return null;
    }

    if (current < countVisiblePage) {
      return null;
    }

    return (
      <div className='pagination__start' onClick={() => {
        this.props.onChangePage(firstValue);
      }}>
        <i className="fas fa-angle-double-left"></i>
      </div>
    );
  }

  renderEndPagination() {
    const {current, countPage, countVisiblePage} = this.props;

    if (countPage === countVisiblePage) {
      return null;
    }

    if (current === countPage - 1 || current === countPage) {
      return null;
    }

    return (
      <div className='pagination__end' onClick={() => {
        this.props.onChangePage(countPage);
      }}>
        <i className="fas fa-angle-double-right"></i>
      </div>
    );
  }


  renderLeftArrow() {
    const {current, firstValue, countVisiblePage, countPage} = this.props;


    if (countPage === countVisiblePage) {
      return null;
    }
    if (current === firstValue) {
      return null;
    }

    return (
        <div className='pagination__last' onClick={() => {
          this.props.onChangePage(current - 1);
        }}>
          <i className="fas fa-angle-left"></i>
        </div>
    );
  }

  renderRightArrow() {
    const {current, countPage, countVisiblePage} = this.props;

    if (countPage === countVisiblePage) {
      return null;
    }

    if (current === countPage - 1 || current === countPage) {
      return null;
    }

    return (
        <div className='pagination__next'  onClick={() => {
            this.props.onChangePage(current + 1);
        }}>
          <i className="fas fa-angle-right"></i>
        </div>
    );
  }

  renderLink(page = 1) {
    const {current} = this.props;
    const className = ['pagination__number'];


    if(current === page) {
      className.push('pagination__number_active');
    }

    return (
        <div className={className.join(' ')} key={page} onClick={() => {
          this.props.onChangePage(page);

        }}>
          {page}
        </div>
    );
  }

  renderLinks() {
    const links = [];
    const { current, countVisiblePage, firstValue, countPage} = this.props;

    let delta = current - countVisiblePage + firstValue;

    if (current === countPage) {
      for (let i = 1; i <= countVisiblePage ; i++) {
        links.push(this.renderLink(countPage -  countVisiblePage + i));
      }
      return links;
    }

    for (let i = firstValue; i <= countVisiblePage; i++) {
      links.push(this.renderLink(delta > 0 ? i + delta : i));
    }
    return links;
  }

  render() {

    return (
        <div className='pagination'>
          <div className='pagination__wrap'>
            {this.renderStartPagination()}
            {this.renderLeftArrow()}
            {this.renderLeftDots()}
            {this.renderLinks()}
            {this.renderRightDots()}
            {this.renderRightArrow()}
            {this.renderEndPagination()}
          </div>
        </div>
    );
  }


}

export default Pagination;
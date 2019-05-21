import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FirstResizableTextarea extends Component {

  static propTypes = {
    minRows: PropTypes.number.isRequired,
    maxRows: PropTypes.number.isRequired
  };

  state = {
    value: '',
    rows: 1
  };

  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }

  get lineHight() {
    if (window.getComputedStyle(this.textArea.current) === null) {
      return 0;
    }
    return parseInt(window.getComputedStyle(this.textArea.current).getPropertyValue('line-height'));
  }

  handleChange = (event) => {
    const textareaLineHeight = this.lineHight;
    const { minRows, maxRows } = this.props;
    const previousRows = event.target.rows;

    event.target.rows = minRows;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows
    });
  };



  render() {
    return (
        <textarea
            ref={this.textArea}
            rows={this.state.rows}
            value={this.state.value}
            className={'content__title-firstbox'}
            onChange={this.handleChange}
        />
    );
  }
}

export default FirstResizableTextarea;

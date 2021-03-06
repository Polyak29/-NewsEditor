import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ResizableTextarea extends Component {

  static propTypes = {
    minRows: PropTypes.number.isRequired,
    maxRows: PropTypes.number.isRequired,
    position: PropTypes.number,
    content: PropTypes.string,
    onChangeText: PropTypes.func,
    textValue: PropTypes.string
  };



  constructor(props) {
    super(props);
    this.textArea = React.createRef();
    this.state = {
      value: props.textValue ? props.textValue: '',
      rows: 1
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {value} = this.state;
    if (nextProps.textValue !== value) {
      this.setState({value: nextProps.textValue});
    }
  }

  get lineHeight() {
    if (window.getComputedStyle(this.textArea.current) === null) {
      return 0;
    }
    return parseInt(window.getComputedStyle(this.textArea.current).getPropertyValue('line-height'));
  }

  handleChange = (event) => {
    const textareaLineHeight = this.lineHeight;
    const { minRows, maxRows, position, onChangeText } = this.props;
    const previousRows = event.target.rows;
    const value = event.target.value;

    event.target.rows = minRows;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    console.log('position onchange', position);

    this.setState({
      value,
      rows: currentRows < maxRows ? currentRows : maxRows
    }, () => {
      onChangeText(position, value);
    });
  };


  render() {
    return (
        <textarea
            ref={this.textArea}
            rows={this.state.rows}
            value={this.state.value}
            className={'title__box'}
            onChange={this.handleChange}
        />
    );
  }
}

export default ResizableTextarea;

import React, {Component} from 'react';
import Block from './Block';
import PropTypes from 'prop-types';
import types from '../../initialState';
class BlockContents extends Component {

  static propTypes = {
    handleClickBlock: PropTypes.func.isRequired
  };


  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='create__blocks blocks'>
          <div className='blocks__header'>
            Блоки контента
          </div>
          <p className='blocks__title'>Изображение и текст</p>
          <div className='blocks__group'>
            <Block>
              <div className='blocks__group-item_text'></div>
            </Block>
            <Block/>
            <Block/>
          </div>
          <div className='blocks__group'>
            <Block/>
            <Block/>
            <Block/>
          </div>
          <p className='blocks__title'>Разделительные элементы</p>
          <div className='blocks__group'>
            <Block>
              onClick={() => {
              this.props.handleClickBlock({type: types.TITLE});
            }}
              <div className='blocks__group-item_1separator'>
              </div>
            </Block>
            <Block/>
          </div>
          <p className='blocks__title'>Вспомогательные элементы</p>
          <div className='blocks__group'>
            <Block>
              <div className='blocks__group-item_question-answer'>
                <i className="fas fa-question"></i>
              </div>
            </Block>
            <Block/>
            <Block/>
          </div>
          <div className='blocks__group'>
            <Block/>
          </div>
        </div>
    );
  }
}

export default BlockContents;
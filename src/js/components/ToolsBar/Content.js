import React, { Component } from 'react';
import {types} from '../../initialState';
import PropTypes from 'prop-types';
import Text from '../Content/Text';
import Title from '../Content/Title';

class Content extends Component {


  static propTypes = {
    blocks: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.string,
      position: PropTypes.number
    })),
    onRemove: PropTypes.func,
    onChangePosition: PropTypes.func,
    onChangeText: PropTypes.func
  };

  static defaultProps = {
    blocks: []
  };



  constructor(props){
    super(props);
  }


  renderBlocks() {
    const {blocks} = this.props;
    return blocks.map(this.renderBlock);
  }

  renderBlock = (block) => {
    const {onRemove, onChangePosition, onChangeText} = this.props;
    console.log('block one', block)
    switch (block.type) {
      case types.TITLE:
        return (
          <Title
              key={`${block.position}`}
              textValue={block.content}
              header={false}
              control={true}
              onChangeText={onChangeText}
              position={block.position}
              onRemove={onRemove}
              onChangePosition={onChangePosition}
          />
        );

      case types.TEXT:
        return (
            <Text
                key={block.position}
                textValue={block.content}
                header={false}
                control={true}
                onChangeText={onChangeText}
                position={block.position}
                onRemove={onRemove}
                onChangePosition={onChangePosition}
            />
        );

      default:
        return null;
    }
  };

  render() {

    return (
        <div className='create__content content'>
          <div className='content__header'> Контент </div>
          <div className={'content__body'}>
            <Title
            header={true}
            control={false}
            />
            <div className='border'></div>
            {this.renderBlocks()}
          </div>
          </div>
    );
  }
}

export default Content;
import React, { Component } from 'react';
import Cell from "./Cell";
class Block extends Component {
  //
  // renderTypeText = () => {
  //   return (
  //       <div className='container2__cell-text'></div>
  //   );
  // }

  render() {
    return (
        <div className='create__blocks blocks'>
          <div className='blocks__header'>
            Блоки контента
          </div>
          <p className='blocks__title'>Изображение и текст</p>
          <div className='blocks__group'>
            {/*<div className='block__news-container2 container2'>*/}
            {/*  <Cell>*/}
            {/*    <div className='container2__cell-text'></div>*/}
            {/*  </Cell>*/}
            {/*  <Cell />*/}
            {/*  <Cell />*/}
            {/*  <Cell />*/}
            {/*  <Cell />*/}
            {/*  <Cell />*/}
            {/*</div>*/}
          </div>
          {/*<div className='block__separator'>*/}
          {/*    <p className='block__separator-title'>Разделительные элементы</p>*/}
          {/*    <div className='block__separator-container3 container3'>*/}
          {/*      <Cell />*/}
          {/*      <Cell />*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className='block__auxiliary'>*/}
          {/*  <p className='block__auxiliary-title'>Вспомогательный элемент</p>*/}
          {/*  <div className='block__auxiliary-container4 container4'>*/}
          {/*    <Cell />*/}
          {/*    <Cell />*/}
          {/*    <Cell />*/}
          {/*    <Cell />*/}
          {/*  </div>*/}

          {/*</div>*/}
        </div>
    );
  }
}

export default Block;
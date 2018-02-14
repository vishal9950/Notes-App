import React from 'react';
import './container.css';
import ContentHead from './content-head';
import ContentHeadSide from './content-head-side';
import TextInputfirst from './textInputFirst';
import Desc from './desc';
import Note from './noteTextBox';
import Save from './save';

const Container = () => (
  <div className="container">
    <ContentHead /><ContentHeadSide />
    <TextInputfirst />
    <Desc />
    <Note />
    <Save />
  </div>
);

export default Container;

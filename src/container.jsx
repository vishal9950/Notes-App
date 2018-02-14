import React from 'react';
import './container.css';
import ContentHead from './content-head';
import ContentHeadSide from './content-head-side';
import TextInputfirst from './textInputFirst';
import Desc from './desc';
import Note from './noteTextBox';
import Save from './save';
import CharLimit from './charLimit';

const Container = () => (
  <div className="container">
    <div><ContentHead /><ContentHeadSide /></div>
    <div><TextInputfirst /></div>
    <div><Desc /></div>
    <div><Note /></div>
    <div><Save />
      <CharLimit />
    </div>
  </div>
);

export default Container;

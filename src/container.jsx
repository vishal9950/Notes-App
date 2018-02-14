import React from 'react';
import './container.css';
import ContentHead from './content-head';
import ContentHeadSide from './content-head-side';
import TextInputfirst from './textInputFirst';

const Container = () => (
  <div className="container">
    <ContentHead /><ContentHeadSide />
    <TextInputfirst />
  </div>
);

export default Container;

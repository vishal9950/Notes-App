import React from 'react';
import { PropTypes } from 'prop-types';
import './content-head.css';

// const ContentHead = () => (
//   <div className="contentHead">Note Title</div>
// );

class ContentHead extends React.Component {
  constructor(props) {
    super(props);
    ContentHead.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="contentHead">{this.props.value}</div>
    );
  }
}

export default ContentHead;

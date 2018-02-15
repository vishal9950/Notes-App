import React from 'react';
import { PropTypes } from 'prop-types';
import './content-head-side.css';

// const ContentHeadSide = () => (
//   <div className="contentHeadSide">en</div>
// );

class ContentHeadSide extends React.Component {
  constructor(props) {
    super(props);
    ContentHeadSide.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="contentHeadSide">{this.props.value}</div>
    );
  }
}

export default ContentHeadSide;

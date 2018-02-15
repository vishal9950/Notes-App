import React from 'react';
import { PropTypes } from 'prop-types';
import './charLimit.css';

// const CharLimit = () => (
//   <div className="charLimit">150 characters</div>
// );

class CharLimit extends React.Component {
  constructor(props) {
    super(props);
    CharLimit.propTypes = {
      limit: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="charLimit">{this.props.limit}{this.props.value}</div>
    );
  }
}

export default CharLimit;

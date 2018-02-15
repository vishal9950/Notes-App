import React from 'react';
import { PropTypes } from 'prop-types';
import './save.css';

// const Save = () => (
//   <div className="save">Save</div>
// );

class Save extends React.Component {
  constructor(props) {
    super(props);
    Save.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="save">{this.props.value}</div>
    );
  }
}

export default Save;

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
      onClick: PropTypes.func.isRequired,
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <button
        className="save"
        onClick={onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Save;

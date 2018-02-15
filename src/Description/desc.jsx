import React from 'react';
import { PropTypes } from 'prop-types';
import './desc.css';

// // const Desc = () => (
//   <div className="desc">
//       Please type your note below &nbsp;
//     <span id="image"><i className="material-icons">assignment</i></span>
//   </div>
// // );

class Desc extends React.Component {
  constructor(props) {
    super(props);
    Desc.propTypes = {
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="desc">
        {this.props.text} &nbsp;
        <span id="image"><i className="material-icons">{this.props.icon}</i></span>
      </div>
    );
  }
}

export default Desc;

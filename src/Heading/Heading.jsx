import React from 'react';
import { PropTypes } from 'prop-types';
import './Heading.css';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    Heading.propTypes = {
      // notekey: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      // onClick: PropTypes.func.isRequired,
    };
  }

  // onClickHandler = () => {
  //   this.props.onClick(this.props.notekey);
  // }

  render() {
    return (
      <h3 className="Heading-heading">{this.props.title}</h3>
    );
  }
}

export default Heading;


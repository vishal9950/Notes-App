import React from 'react';
import { PropTypes } from 'prop-types';
import './Heading.css';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    Heading.propTypes = {
      title: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <h3 className="Heading-heading">{this.props.title}</h3>
    );
  }
}

export default Heading;


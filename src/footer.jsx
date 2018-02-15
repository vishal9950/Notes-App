import React from 'react';
import { PropTypes } from 'prop-types';
import './footer.css';

// const Footer = () => (
//   <footer>About Us</footer>
// );

class Footer extends React.Component {
  constructor(props) {
    super(props);
    Footer.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <footer>{this.props.value}</footer>
    );
  }
}

export default Footer;

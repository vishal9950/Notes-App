import React from 'react';
import { PropTypes } from 'prop-types';

import './header.css';

// const Header = () => (
//   <header className="header">{this.props.title}</header>
// );

class Header extends React.Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      title: PropTypes.string.isRequired,
    };
  }
  render() {
    return (
      <header className="header">{this.props.title}</header>
    );
  }
}

export default Header;

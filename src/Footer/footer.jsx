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
      page: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  onClickHandler = () => {
    this.props.onChange();
  }

  setPage = () => {
    if (this.props.page === 1) {
      return (<footer className="Footer-footer">{this.props.value}</footer>);
    }
    return (<button className="Footer-button" onClick={this.onClickHandler}>{this.props.value}</button>);
  }

  render() {
    const view = this.setPage();
    return view;
  }
}

export default Footer;

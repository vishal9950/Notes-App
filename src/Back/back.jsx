import React from 'react';
import { PropTypes } from 'prop-types';

import './back.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Container from '../Container/container';

// const Back = () => (
//   <div className="back">
// <Header title="Start Taking Notes" /><Container /><Footer value="About Us" /></div>
// );

const headerTitle = 'Start Taking Notes';
const footerText = 'About Us';

class Back extends React.Component {
  constructor(props) {
    super(props);
    Back.propTypes = {
      onChange: PropTypes.func.isRequired,
    };
  }

  onChangeHandler = (title, allChars) => {
    this.props.onChange(title, allChars);
  }

  render() {
    return (
      <div className="back"><Header title={headerTitle} /><Container onChange={this.onChangeHandler} /><Footer value={footerText} /></div>
    );
  }
}

export default Back;

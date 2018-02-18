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


class Back extends React.Component {
  constructor(props) {
    super(props);
    Back.propTypes = {
      onChange: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      storeNotes: PropTypes.array.isRequired,
      length: PropTypes.number.isRequired,
    };
  }

  onChangeHandler1 = (notekey, title, content) => {
    this.props.onChange(notekey, title, content);
  }

  onChangeHandler = (notekey, title, allChars) => {
    this.props.onChange(notekey, title, allChars);
  }

  onChangeHandlerFooter = () => {
    this.props.onChange();
  }

  setPage = () => {
    if (this.props.page === 1) {
      return (
        <div className="App-main">
          <Header title="Start Taking Notes" />
          <Container
            onChange={this.onChangeHandler}
            storeNotes={this.props.storeNotes}
            page={this.props.page}
          />
          <Footer
            value="About Us"
            page={this.props.page}
            onChange={this.onChangeHandlerFooter}
          />
        </div>
      );
    }
    return (
      <div className="App-main">
        <Header title="Saved Notes" />
        <Container
          page={this.props.page}
          storeNotes={this.props.storeNotes}
          onChange={this.onChangeHandler}
          onChange1={this.onChangeHandler1}
          length={this.props.length}
        />
        <Footer
          value="Create new Note"
          page={this.props.page}
          onChange={this.onChangeHandlerFooter}
        />
      </div>
    );
  }

  render() {
    const view = this.setPage();
    return view;
  }
}

export default Back;

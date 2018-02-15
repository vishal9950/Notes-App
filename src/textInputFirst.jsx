import React from 'react';
import { PropTypes } from 'prop-types';
import './textInputFirst.css';

// const TextInputFirst = () => (
//   <input className="txtInp" type="text" name="title" placeholder="Note Title" />
// );

class TextInputFirst extends React.Component {
  constructor(props) {
    super(props);
    TextInputFirst.propTypes = {
      value: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <input className="txtInp" type="text" name="title" placeholder={this.props.value} />
    );
  }
}

export default TextInputFirst;

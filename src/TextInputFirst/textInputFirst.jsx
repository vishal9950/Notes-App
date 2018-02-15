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
      placeholder: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  render() {
    const { onChange } = this.props;
    return (
      <input
        value={this.props.value}
        className="txtInp"
        type="text"
        name="title"
        onChange={onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default TextInputFirst;

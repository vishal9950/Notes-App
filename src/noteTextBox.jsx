import React from 'react';
import { PropTypes } from 'prop-types';
import './noteTextBox.css';


class Note extends React.Component {
  constructor(props) {
    super(props);
    Note.propTypes = {
      placeholder: PropTypes.string.isRequired,
      maxLen: PropTypes.number.isRequired,
      onChange: PropTypes.func.isRequired,
      style: PropTypes.isRequired,
    };
  }

  // verifyLength = () => {
  //   if (event.target.value.length >= this.state.charLen) {
  //     this.setState({
  //       style: {
  //         color: '#ff0000',
  //       },
  //     });
  //   } else {
  //     this.setState({
  //       style: {
  //         color: '#000000',
  //       },
  //     });
  //   }
  // }

  // checkCharLimit(maxLen) {
  //   if (document.getElementById('txtarea').value.length >= maxLen) {
  //     this.setState({
  //       style: {
  //         color: '#ff0000',
  //       },
  //     });
  //   } else {
  //     this.setState({
  //       style: {
  //         color: '#000000',
  //       },
  //     });
  //   }
  // }

  render() {
    const { onChange } = this.props;
    return (
      <textarea
        id="txtarea"
        className="note"
        style={this.props.style}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLen}
        rows="50"
        onChange={onChange}
      />
    );
  }
}

export default Note;

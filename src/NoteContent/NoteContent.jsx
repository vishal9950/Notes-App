import React from 'react';
import { PropTypes } from 'prop-types';
import './NoteContent.css';

class NoteContent extends React.Component {
  constructor(props) {
    super(props);
    NoteContent.propTypes = {
      content: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <textarea className="NoteContent-note" readOnly>{this.props.content}</textarea>
    );
  }
}

export default NoteContent;


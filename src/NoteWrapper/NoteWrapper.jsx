import React from 'react';
import { PropTypes } from 'prop-types';
import Heading from '../Heading/Heading';
import NoteContent from '../NoteContent/NoteContent';

class NoteWrapper extends React.Component {
  constructor(props) {
    super(props);
    NoteWrapper.propTypes = {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="NoteWrapper-title"><Heading title={this.props.title} /><NoteContent content={this.props.content} /></div>
    );
  }
}

export default NoteWrapper;


import React from 'react';
import { PropTypes } from 'prop-types';
import Heading from '../Heading/Heading';
import NoteContent from '../NoteContent/NoteContent';

class NoteWrapper extends React.Component {
  constructor(props) {
    super(props);
    NoteWrapper.propTypes = {
      notekey: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };
  }

  onClickHandler = () => {
    const { notekey, title, content } = this.props;
    this.props.onChange(notekey, title, content, content.length);
  }

  render() {
    return (
      <div
        className="NoteWrapper-title"
        onClick={this.onClickHandler}
      >
        <Heading
          notekey={this.props.notekey}
          title={this.props.title}
        />
        <NoteContent
          content={this.props.content}
        />
      </div>
    );
  }
}

export default NoteWrapper;


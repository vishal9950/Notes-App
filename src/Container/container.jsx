import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import action from '../redux/actions';
import './container.css';
import ContentHead from '../ContentHead/content-head';
import ContentHeadSide from '../ContentHeadSide/content-head-side';
import TextInputfirst from '../TextInputFirst/textInputFirst';
import Desc from '../Description/desc';
import Note from '../NoteTextBox/noteTextBox';
import Save from '../SaveButton/save';
import CharLimit from '../CharLimit/charLimit';
import NoteWrapper from '../NoteWrapper/NoteWrapper';

// const Container = () => (
//   <div className="container">
//     <div><ContentHead value="Note Title" /><ContentHeadSide value="en" /></div>
//     <div><TextInputfirst value="Note Title" /></div>
//     <div><Desc text="Please type your note below" icon="assignment" /></div>
//     <div><Note placeholder="Your note goes here..." maxLen="150" /></div>
//     <div><Save value="Save" />
//       <CharLimit limit="150" value=" characters" />
//     </div>
//   </div>
// );

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxLen: 150,
      charLen: 150,
      allChars: '',
      // storedNotes: this.props.storeNotes,
      title: '',
      notekey: null,
      // rows: [],
    };
    Container.propTypes = {
      onChange: PropTypes.func.isRequired,
      // onChange1: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      storeNotes: PropTypes.array.isRequired,
      length: PropTypes.number.isRequired,
      insertNotes1: PropTypes.func.isRequired,
    };
    // this.checkCharLimit = this.checkCharLimit.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
    // this.updatetitle = this.updatetitle.bind(this);
  }

  onClickHandler = () => {
    this.props.onChange(this.state.notekey, this.state.title, this.state.allChars);
    this.setState({
      maxLen: 150,
      charLen: 150,
      allChars: '',
      title: '',
      notekey: null,
    });
  }

  onChangeHandler = (notekey, title, content, charLength) => {
    this.state.notekey = notekey;
    // const newStoreNotes = this.props.storeNotes;
    const { storeNotes } = this.props;
    this.props.onChange();
    let i;
    for (i = 0; i < this.props.length; i += 1) {
      if (storeNotes[i].id === notekey) {
        storeNotes[i].title = title;
        storeNotes[i].content = content;
        break;
      }
    }
    this.setState({
      maxLen: 150,
      charLen: this.state.maxLen - charLength,
      allChars: content,
      title,
    });
  }

  setPage = () => {
    let style = {
      color: '#000000',
    };
    if (this.state.allChars.length >= this.state.maxLen) {
      style = {
        color: '#ff0000',
      };
    } else {
      style = {
        color: '#000000',
      };
    }

    const rows = [];
    const { storeNotes } = this.props;
    for (let i = 0; i < storeNotes.length; i += 1) {
      rows.push(<NoteWrapper
        key={storeNotes[i].noteid}
        notekey={storeNotes[i].noteid}
        title={storeNotes[i].title}
        content={storeNotes[i].content}
        onChange={this.onChangeHandler}
      />);
    }

    // this.state.notekey = rows.notekey;

    // this.state.rows = rows;

    if (this.props.page === 1) {
      return (
        <div className="Container-content">
          <div><ContentHead value="Note Title" /><ContentHeadSide value="en" /></div>
          <div><TextInputfirst value={this.state.title} placeholder="Note Title" onChange={this.updatetitle} /></div>
          <div><Desc text="Please type your note below" icon="assignment" /></div>
          <div><Note
            value={this.state.allChars}
            placeholder="Your note goes here..."
            maxLen={this.state.maxLen}
            onChange={this.checkCharLimit}
            style={style}
          />
          </div>
          <div><Save value="Save" onClick={this.onClickHandler} />
            <CharLimit limit={this.state.charLen} value=" characters left" />
          </div>
        </div>
      );
    }
    return (
      <div className="Container-note">
        <button className="Container-sync" onClick={() => this.props.insertNotes1(this.props.storeNotes)}>Sync</button>
        {rows}
      </div>
    );
  }

  updatetitle = (event) => {
    this.setState({
      title: `${event.target.value}`,
    });
  }

  checkCharLimit = (event) => {
    this.setState({
      charLen: this.state.maxLen - event.target.value.length,
      allChars: `${event.target.value}`,
    });
  }

  // let style = {
  //   color: '#000000',
  // };
  // if (this.state.allChars.length >= this.state.maxLen) {
  //   style = {
  //     color: '#ff0000',
  //   };
  // } else {
  //   style = {
  //     color: '#000000',
  //   };
  // }

  render() {
    const view = this.setPage();
    return view;
  }
}

const mapStateToProps = state => ({
  storeNotes: state.reducer.savedNotes,
});

const mapDispatchToProps = dispatch => ({
  insertNotes1: (notes) => { dispatch(action.insertNotes(notes)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

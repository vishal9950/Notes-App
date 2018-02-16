import React from 'react';
import { PropTypes } from 'prop-types';

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
      // storeNotes: [],
      title: '',
    };
    Container.propTypes = {
      onChange: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      storeNotes: PropTypes.array.isRequired,
      length: PropTypes.number.isRequired,
    };
    // this.checkCharLimit = this.checkCharLimit.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
    // this.updatetitle = this.updatetitle.bind(this);
  }

  onClickHandler = () => {
    this.props.onChange(this.state.title, this.state.allChars);
    this.setState({
      maxLen: 150,
      charLen: 150,
      allChars: '',
      title: '',
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
    for (let i = 0; i < this.props.length; i += 1) {
      rows.push(<NoteWrapper
        title={this.props.storeNotes[i].title}
        content={this.props.storeNotes[i].content}
      />);
    }

    if (this.props.page === 1) {
      return (
        <div className="Container-content">
          <div><ContentHead value="Note Title" /><ContentHeadSide value="en" /></div>
          <div><TextInputfirst value={this.state.title} placeholder="Note Title" onChange={this.updatetitle} /></div>
          <div><Desc text="Please type your note below" icon="assignment" /></div>
          <div><Note value={this.state.allChars} placeholder="Your note goes here..." maxLen={this.state.maxLen} onChange={this.checkCharLimit} style={style} /></div>
          <div><Save value="Save" onClick={this.onClickHandler} />
            <CharLimit limit={this.state.charLen} value=" characters left" />
          </div>
        </div>
      );
    }
    return (
      <div className="Container-note">
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

export default Container;

import React from 'react';
import './container.css';
import ContentHead from './content-head';
import ContentHeadSide from './content-head-side';
import TextInputfirst from './textInputFirst';
import Desc from './desc';
import Note from './noteTextBox';
import Save from './save';
import CharLimit from './charLimit';

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
    };
    this.checkCharLimit = this.checkCharLimit.bind(this);
  }

  checkCharLimit = (event) => {
    this.setState({
      charLen: this.state.maxLen - event.target.value.length,
      allChars: `${event.target.value}`,
    });
    return this.state.charLen;
  }

  render() {
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
    return (
      <div className="container">
        <div><ContentHead value="Note Title" /><ContentHeadSide value="en" /></div>
        <div><TextInputfirst value="Note Title" /></div>
        <div><Desc text="Please type your note below" icon="assignment" /></div>
        <div><Note placeholder="Your note goes here..." maxLen={this.state.maxLen} onChange={this.checkCharLimit} style={style} /></div>
        <div><Save value="Save" />
          <CharLimit limit={this.state.charLen} value=" characters left" />
        </div>
      </div>
    );
  }
}

export default Container;

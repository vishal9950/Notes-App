import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Back from '../Back/back';

// const App = () => (
//   <div className="complete"><Back /></div>
// );


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeNotes: [],
      page: 1,
      length: 0,
    };
  }

  onChangeHandler = (notekey, title, allChars) => {
    const { storeNotes } = this.state;
    if (notekey === null) {
      const note = {
        title,
        content: allChars,
        id: this.state.storeNotes.length + 1,
      };
      storeNotes.push(note);
    } else {
      storeNotes[notekey - 1].title = title;
      storeNotes[notekey - 1].content = allChars;
    }
    this.setState({
      storeNotes,
      page: 2,
      length: this.state.storeNotes.length,
    });
  }

  onChangeHandlerPg2 = () => {
    this.setState({
      page: 1,
    });
  }

  setPage = () => {
    if (this.state.page === 1) {
      return (
        <div
          className="complete"
        >
          <Back
            onChange={this.onChangeHandler}
            page={this.state.page}
            storeNotes={this.state.storeNotes}
          />
        </div>
      );
    }
    return (
      <div className="App-main">
        <Back
          onChange={this.onChangeHandlerPg2}
          page={this.state.page}
          onChange1={this.onChangeHandler}
          storeNotes={this.state.storeNotes}
          length={this.state.length}
        />
      </div>
    );
  }

  render() {
    const view = this.setPage();
    return view;
    // <div className="complete"><Back onChange={this.onChangeHandler} /></div>
  }
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

export default render;

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

  onChangeHandler = (title, allChars) => {
    const note = {
      title,
      content: allChars,
    };
    const { storeNotes } = this.state;
    storeNotes.push(note);
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
      return (<div className="complete"><Back onChange={this.onChangeHandler} page={this.state.page} /></div>);
    }
    return (<div className="App-main"><Back onChange={this.onChangeHandlerPg2} page={this.state.page} storeNotes={this.state.storeNotes} length={this.state.length} /></div>);
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

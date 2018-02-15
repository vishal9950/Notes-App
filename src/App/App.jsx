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
    });
  }

  render() {
    return (
      <div className="complete"><Back onChange={this.onChangeHandler} /></div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

export default render;

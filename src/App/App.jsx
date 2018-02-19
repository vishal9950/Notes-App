import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './App.css';
import Back from '../Back/back';
import action from '../redux/actions';

// const App = () => (
//   <div className="complete"><Back /></div>
// );


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // storeNotes: [],
      page: 1,
      length: 0,
    };
    App.propTypes = {
      storeNotes: PropTypes.func.isRequired,
      saveNote1: PropTypes.func.isRequired,
      updateNote1: PropTypes.func.isRequired,
    };
  }

  onChangeHandler = (notekey, title, allChars) => {
    console.log(notekey, title, allChars);
    const { storeNotes, saveNote1, updateNote1 } = this.props;
    if (notekey === null) {
      const note = {
        title,
        content: allChars,
        id: storeNotes.length + 1,
      };
      saveNote1(note);
      // storeNotes.push(note);
    } else {
      const note = {
        title,
        content: allChars,
        id: notekey,
      };
      updateNote1(note);
      // storeNotes[notekey - 1].title = title;
      // storeNotes[notekey - 1].content = allChars;
    }
    this.setState({
      page: 2,
      length: storeNotes.length,
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
            // storeNotes={this.props.storeNotes}
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
          // storeNotes={this.props.storeNotes}
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

const mapStateToProps = state => ({
  storeNotes: state.reducer.savedNotes,
});

const mapDispatchToProps = dispatch => ({
  saveNote1: (note) => { dispatch(action.saveNote(note)); },
  updateNote1: (note) => { dispatch(action.updateNote(note)); },
});

// const render = () => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root'),
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);

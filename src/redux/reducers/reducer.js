const defaultState = {
  savedNotes: [],
};

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_NOTE': {
      return {
        ...prevState,
        savedNotes: prevState.savedNotes.concat([action.payload]),
      };
    }
    case 'UPDATE_NOTE': {
      const currNote = prevState.savedNotes;
      currNote[action.payload.id - 1] = Object.assign({}, action.payload);
      return {
        ...prevState,
        savedNotes: currNote,
      };
    }
    default: {
      return prevState;
    }
  }
};

export default reducer;

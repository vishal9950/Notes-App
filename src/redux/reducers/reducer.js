import axios from 'axios';

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
      currNote[action.payload.noteid - 1] = Object.assign({}, action.payload);
      return {
        ...prevState,
        savedNotes: currNote,
      };
    }
    case 'GET_NOTES': {
      const notes = action.payload;
      // console.log(notes);
      // const formattednotes = notes.reduce((newObj, note) => {
      //   const tempObj = { ...newObj };
      //   tempObj[Number(note.noteid)] = note;
      //   return tempObj;
      // }, {});
      return {
        ...prevState,
        savedNotes: notes,
      };
    }
    case 'INSERT_NOTES': {
      const options = {
        url: '/sync',
        method: 'PUT',
        data: action.payload,
      };
      axios(options);
      return prevState;
    }
    default: {
      return prevState;
    }
  }
};

export default reducer;

const SAVE_NOTE = 'SAVE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const updateNote = payload => ({
  type: UPDATE_NOTE,
  payload,
});

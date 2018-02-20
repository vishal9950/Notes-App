const SAVE_NOTE = 'SAVE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const GET_NOTES = 'GET_NOTES';
const INSERT_NOTES = 'INSERT_NOTES';

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const updateNote = payload => ({
  type: UPDATE_NOTE,
  payload,
});

export const getNotes = payload => ({
  type: GET_NOTES,
  payload,
});

export const insertNotes = payload => ({
  type: INSERT_NOTES,
  payload,
});

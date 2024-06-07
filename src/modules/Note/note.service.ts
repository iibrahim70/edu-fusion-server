import { INote } from './note.interface';
import { Note } from './note.model';

const createNoteIntoDB = async (payload: INote) => {
  const result = await Note?.create(payload);
  return result;
};

export const NoteServices = {
  createNoteIntoDB,
};

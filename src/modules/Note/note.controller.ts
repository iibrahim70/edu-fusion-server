import httpStatus from 'http-status';
import catchAsync from '../../helpers/catchAsync';
import sendResponse from '../../helpers/sendResponse';
import { NoteServices } from './note.service';

const createNote = catchAsync(async (req, res) => {
  const result = await NoteServices?.createNoteIntoDB(req?.body);

  sendResponse(res, {
    statusCode: httpStatus?.CREATED,
    success: true,
    message: 'Note created successfully!',
    data: result,
  });
});

export const NoteControllers = {
  createNote,
};

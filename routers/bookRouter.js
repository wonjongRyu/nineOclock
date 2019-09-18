import express from "express";
import routes from "../routes";
import {
  bookDetail,
  editBook,
  deleteBook,
  getUploadBook,
  postUploadBook
} from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get(routes.editBook, editBook);

bookRouter.get(routes.deleteBook, deleteBook);

bookRouter.get(routes.uploadBook, getUploadBook);
bookRouter.post(routes.uploadBook, postUploadBook);

bookRouter.get(routes.bookDetail(), bookDetail);

export default bookRouter;

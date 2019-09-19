import express from "express";
import routes from "../routes";
import {
  bookDetail,
  getEditBook,
  postEditBook,
  deleteBook,
  getUploadBook,
  postUploadBook
} from "../controllers/bookController";
import { addBook } from "../middlewares";

const bookRouter = express.Router();

bookRouter.get(routes.uploadBook, getUploadBook);
bookRouter.post(routes.uploadBook, addBook, postUploadBook);

bookRouter.get(routes.bookDetail(), bookDetail);
bookRouter.get(routes.editBook(), getEditBook);
bookRouter.post(routes.editBook(), postEditBook);
bookRouter.get(routes.deleteBook(), deleteBook);

export default bookRouter;

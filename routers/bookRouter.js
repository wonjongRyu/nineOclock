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
import { addBook, onlyPrivate } from "../middlewares";

const bookRouter = express.Router();

bookRouter.get(routes.uploadBook, onlyPrivate, getUploadBook);
bookRouter.post(routes.uploadBook, onlyPrivate, addBook, postUploadBook);

bookRouter.get(routes.bookDetail(), bookDetail);
bookRouter.get(routes.editBook(), onlyPrivate, getEditBook);
bookRouter.post(routes.editBook(), onlyPrivate, postEditBook);
bookRouter.get(routes.deleteBook(), onlyPrivate, deleteBook);

export default bookRouter;

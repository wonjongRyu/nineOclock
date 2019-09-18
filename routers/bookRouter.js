import express from "express";
import routes from "../routes";
import {
  bookDetail,
  editBook,
  deleteBook,
  uploadBook
} from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get(routes.editBook, editBook);
bookRouter.get(routes.deleteBook, deleteBook);
bookRouter.get(routes.uploadBook, uploadBook);
bookRouter.get(routes.bookDetail, bookDetail);

export default bookRouter;

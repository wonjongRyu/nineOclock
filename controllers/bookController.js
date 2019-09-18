import { books } from "../db";
import routes from "../routes";

export const bookDetail = (req, res) =>
  res.render("bookDetail", { pageTitle: "Book Detail" });

export const getUploadBook = (req, res) =>
  res.render("uploadBook", { pageTitle: "Upload Book" });

export const postUploadBook = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save book
  res.redirect(routes.home);
};

export const editBook = (req, res) =>
  res.render("editBook", { pageTitle: "Edit Book" });

export const deleteBook = (req, res) =>
  res.render("deleteBook", { pageTitle: "Delete Book" });

import routes from "../routes";
import Book from "../models/Book";

export const bookDetail = (req, res) =>
  res.render("bookDetail", { pageTitle: "Book Detail" });

export const getUploadBook = (req, res) =>
  res.render("uploadBook", { pageTitle: "Upload Book" });

export const postUploadBook = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newBook = await Book.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newBook);
  res.redirect(routes.bookDetail(newBook.id));
};

export const editBook = (req, res) =>
  res.render("editBook", { pageTitle: "Edit Book" });

export const deleteBook = (req, res) =>
  res.render("deleteBook", { pageTitle: "Delete Book" });

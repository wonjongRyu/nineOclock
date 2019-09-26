import routes from "../routes";
import Book from "../models/Book";
import fetch from "node-fetch";

export const bookDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  const { url: bookId } = req;
  registerView(bookId);
  try {
    const book = await Book.findById(id).populate("creator");
    res.render("bookDetail", { pageTitle: "Book Detail", book });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getUploadBook = (req, res) =>
  res.render("uploadBook", { pageTitle: "Upload Book" });

export const postUploadBook = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newBook = await Book.create({
    fileUrl: `/${path}`,
    title,
    description,
    creator: req.user.id
  });
  req.user.books.push(newBook.id);
  req.user.save();
  res.redirect(routes.bookDetail(newBook.id));
};

export const getEditBook = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const book = await Book.findById(id);
    if (book.creator != req.user.id) {
      throw Error();
    } else {
      res.render("editBook", { pageTitle: `Edit ${book.title}`, book });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditBook = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Book.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.bookDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteBook = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const book = await Book.findById(id);
    if (book.creator != req.user.id) {
      throw Error();
    } else {
      await Book.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

export const postRegisterView = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const book = await Book.findById(id);
    book.views += 1;
    book.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

const registerView = async bookId => {
  try {
    await fetch(`http://localhost:4000/api${bookId}/views`, {
      method: "POST"
    });
  } catch (error) {
    console.log(error);
  }
};

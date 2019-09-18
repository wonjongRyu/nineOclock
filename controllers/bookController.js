export const bookDetail = (req, res) =>
  res.render("bookDetail", { pageTitle: "Book Detail" });

export const uploadBook = (req, res) =>
  res.render("uploadBook", { pageTitle: "Upload Book" });

export const editBook = (req, res) =>
  res.render("editBook", { pageTitle: "Edit Book" });

export const deleteBook = (req, res) =>
  res.render("deleteBook", { pageTitle: "Delete Book" });

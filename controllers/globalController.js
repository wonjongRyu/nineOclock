import routes from "../routes";
import Book from "../models/Book";

export const home = async (req, res) => {
  try {
    const Books = await Book.find({});
    res.render("home", { pageTitle: "Home", books });
  } catch (error) {
    console.log(error);
    res.render("home", { PageTitle: "Home", books: [] });
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, books });
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

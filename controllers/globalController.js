import routes from "../routes";
import Book from "../models/Book";
import User from "../models/User";
import passport from "passport";

export const home = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", books });
  } catch (error) {
    console.log(error);
    res.render("home", { PageTitle: "Home", books: [] });
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    try {
      const user = await User({ name, email });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let books = [];
  try {
    books = await Book.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, books });
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

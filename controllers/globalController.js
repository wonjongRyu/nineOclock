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

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, done) => {
  const id = profile.id;
  const username = profile.username;
  const kaccout_email = profile._json.kaccount_email;
  const profile_image = profile._json.properties.profile_image;

  try {
    console.log(profile, done);
    const user = await User.findOne({ kaccout_email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email: kaccout_email,
      name: username,
      kakaoId: id,
      avatarUrl: profile_image
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

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
  req.logout();
  res.redirect(routes.home);
};

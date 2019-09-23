import routes from "./routes";
import multer from "multer";

const multerBook = multer({ dest: "uploads/books/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const addBook = multerBook.single("bookFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Nine O Clock";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

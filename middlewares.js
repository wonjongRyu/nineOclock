import routes from "./routes";
import multer from "multer";

const multerBook = multer({ dest: "uploads/books/" });

export const addBook = multerBook.single("bookFile");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Nine O Clock";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

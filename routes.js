// Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Books

const BOOKS = "/books";
const BOOK_DETAIL = "/:id";
const EDIT_BOOK = "/:id/edit";
const DELETE_BOOK = "/:id/delete";
const UPLOAD_BOOK = "/upload";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  books: BOOKS,
  bookDetail: BOOK_DETAIL,
  editBook: EDIT_BOOK,
  deleteBook: DELETE_BOOK,
  uploadBook: UPLOAD_BOOK
};

export default routes;

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
const ME = "/me";

// Books

const BOOKS = "/books";
const BOOK_DETAIL = "/:id";
const EDIT_BOOK = "/:id/edit";
const DELETE_BOOK = "/:id/delete";
const UPLOAD_BOOK = "/upload";

// Authentication

const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/oauth";

// API

const API = "/api";
const REGISTER_VIEW = "/:id/views";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,

  books: BOOKS,
  bookDetail: id => {
    if (id) {
      return `/books/${id}`;
    } else {
      return BOOK_DETAIL;
    }
  },
  editBook: id => {
    if (id) {
      return `/books/${id}/edit`;
    } else {
      return EDIT_BOOK;
    }
  },
  deleteBook: id => {
    if (id) {
      return `/books/${id}/delete`;
    } else {
      return DELETE_BOOK;
    }
  },
  uploadBook: UPLOAD_BOOK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW
};

export default routes;

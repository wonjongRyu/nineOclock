import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  search,
  logout
} from "../controllers/globalController";

import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;

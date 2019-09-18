import express from "express";
import routes from "../routes";
import { home, join, login, search } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.search, search);

export default globalRouter;

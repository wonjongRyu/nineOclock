import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import bookRouter from "./routers/bookRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
import passport from "passport";
import "./passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import apiRouter from "./routers/apiRouter";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.books, bookRouter);
app.use(routes.api, apiRouter);

export default app;

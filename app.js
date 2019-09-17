import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Welcome Home!");

const handleProfile = (req, res) => res.send("This is my Profile!");

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;

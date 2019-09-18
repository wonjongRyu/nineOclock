import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Nine O Clock";
  res.locals.routes = routes;
  next();
};

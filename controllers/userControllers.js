export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const search = (req, res) => res.render("search");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("user Detail");
export const editProfile = (req, res) => res.render("edit Profile");
export const changePassword = (req, res) => res.render("change Password");

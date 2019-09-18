export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const login = (req, res) => res.render("login");

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

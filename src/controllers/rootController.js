export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const search = (req, res) => {
  return res.render("search", { pageTitle: "Search" });
};

export const interview = (req, res) => {
  return res.render("interview", { pageTitle: "Interview" });
};

export const faq = (req, res) => {
  return res.render("faq", { pageTitle: "FaQ" });
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = (req, res) => {
  return res.redirect("/");
};

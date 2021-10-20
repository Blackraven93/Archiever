export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  return res.redirect("/login");
};

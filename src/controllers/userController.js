// - profile(프로필) -> /users/:id
// - edit(회원정보 수정) -> /users/:id/edit
// - delete(회원 삭제) -> /users/:id/delete
// - archive(동영상 보관함) -> /users/:id/archive

export const profile = (req, res) => {
  return res.render("profile", { pageTitle: "edit" });
};

export const getUserEdit = (req, res) => {
  return res.render("userEdit", { pageTitle: "edit" });
};

export const postUserEdit = (req, res) => {
  // const backUrl = req.header('Referer') || '/';
  // return res.redirect(backUrl);
  return res.render("userEdit", { pageTitle: "edit" });
};

export const getUserDelete = (req, res) => {
  return res.render("userDelete", { pageTitle: "delete" });
};

export const postUserDelete = (req, res) => {
  return res.render("userDelete", { pageTitle: "delete" });
};

export const archive = (req, res) => {
  return res.render("archive", { pageTitle: "archive" });
};

// - video(영상 서비스) -> /videos/:id
// - upload(업로드) -> /videos/:id/upload
// - edit(영상 수정) -> /videos/:id/edit
// - delete(영상 삭제) -> /videos/:id/delete
// - comments(영상 댓글) -> /videos/:id/comment/:id
// - comments delete(댓글 삭제) -> /videos/:id/comment/:id/delete

export const watchVideo = (req, res) => {
  return res.render("watch", { pageTitle: "watch" });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  // const backUrl = req.header('Referer') || '/';
  // return res.redirect(backUrl);
  return res.render("upload", { pageTitle: "Upload" });
};

export const getVideoEdit = (req, res) => {
  return res.render("videoEdit", { pageTitle: "videoEdit" });
};

export const postVideoEdit = (req, res) => {
  return res.render("videoEdit", { pageTitle: "videoEdit" });
};

export const getVideoDelete = (req, res) => {
  return res.render("videoDelete", { pageTitle: "delete" });
};

export const postVideoDelete = (req, res) => {
  return res.render("videoDelete", { pageTitle: "delete" });
};

export const videoComment = (req, res) => {
  return res.render("watch", { pageTitle: "watch" });
};
export const videoCommentDelete = (req, res) => {
  return res.render("watch", { pageTitle: "watch" });
};

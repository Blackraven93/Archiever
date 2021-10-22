// - video(영상 서비스) -> /videos/:id
// - upload(업로드) -> /videos/:id/upload
// - edit(영상 수정) -> /videos/:id/edit
// - delete(영상 삭제) -> /videos/:id/delete
// - comments(영상 댓글) -> /videos/:id/comment/:id
// - comments delete(댓글 삭제) -> /videos/:id/comment/:id/delete
import Video from "../models/Video";

export const watchVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  return res.render("watch", { pageTitle: "watch", video });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  // 리다이렉트 const backUrl = req.header('Referer') || '/';
  // return res.redirect(backUrl);
  const { title, description, categories, tags, } = req.body;
  try {
    const video = new Video({
      title,
      description,
      categories: [categories],
      tags: [tags],
      meta: {
        views: 0,
        likes: 0,
        sharedCount: 0
      }
    })
    await video.save();
    return res.render("upload", { pageTitle: "Upload" });
  } catch (error) {
    return res.render("upload", { pageTitle: "Upload", errorMessage: error._message });
  }
};

export const getVideoEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  return res.render("videoEdit", { pageTitle: "videoEdit", video });
};

export const postVideoEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, categories, tags, } = req.body;
  try {
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      categories,
      tags
    })
    return res.redirect(`/videos/${id}`)
  } catch (error) {
    return res.render("upload", { pageTitle: "Upload", errorMessage: error._message });
  }
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

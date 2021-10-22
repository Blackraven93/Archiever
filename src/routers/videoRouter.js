import express from "express";
import {
  watchVideo,
  getUpload,
  postUpload,
  getVideoEdit,
  postVideoEdit,
  getVideoDelete,
  postVideoDelete,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watchVideo);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getVideoEdit).post(postVideoEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(getVideoDelete).post(postVideoDelete);

export default videoRouter;

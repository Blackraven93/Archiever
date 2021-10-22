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
videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getVideoEdit).post(postVideoEdit);
videoRouter.route("/:id(\\d+)/delete").get(getVideoDelete).post(postVideoDelete);

export default videoRouter;

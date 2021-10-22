import express from "express";
import {
  profile,
  getUserEdit,
  postUserEdit,
  getUserDelete,
  postUserDelete,
  archive,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", profile);
userRouter.route("/:id(\\d+)/edit").get(getUserEdit).post(postUserEdit);
userRouter.route("/:id(\\d+)/delete").get(getUserDelete).post(postUserDelete);
userRouter.get("/:id(\\d+)/archive", archive);

export default userRouter;

// - profile(프로필) -> /users/:id
// - edit(회원정보 수정) -> /users/:id/edit
// - delete(회원 삭제) -> /users/:id/delete
// - archive(동영상 보관함) -> /users/:id/archive

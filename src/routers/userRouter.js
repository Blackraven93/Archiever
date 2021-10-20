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

userRouter.get("/:id", profile);
userRouter.route("/:id/edit").get(getUserEdit).post(postUserEdit);
userRouter.route("/:id/delete").get(getUserDelete).post(postUserDelete);
userRouter.get("/:id/archive", archive);

export default userRouter;

// - profile(프로필) -> /users/:id
// - edit(회원정보 수정) -> /users/:id/edit
// - delete(회원 삭제) -> /users/:id/delete
// - archive(동영상 보관함) -> /users/:id/archive

import express from "express";
import {
  home,
  search,
  interview,
  faq,
  getLogin,
  postLogin,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/search", search);
rootRouter.get("/interview", interview);
rootRouter.get("/faq", faq);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;

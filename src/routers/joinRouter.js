import express from "express";
import { getJoin, postJoin } from "../controllers/joinController";

const joinRouter = express.Router();

joinRouter.route("/").get(getJoin).post(postJoin);

export default joinRouter;

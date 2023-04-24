import express from "express";
import { trending } from "../controllers/videoController";
import {
  home,
  join,
  login,
  newController,
} from "../controllers/userController";

const globalRouter = express.Router();
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/new", newController);

export default globalRouter;

import express from "express";
import {
  watch,
  getUpload,
  postUpload,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
//videoRouter.get("/:id(\\d+)/edit", getEdit);
//videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;

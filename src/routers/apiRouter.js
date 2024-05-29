import express from "express";
import {
  clickLike,
  createComment,
  deleteComment,
  registerView,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.delete(
  "/videos/:id([0-9a-f]{24})/:deleteComment([0-9a-f]{24})",
  deleteComment
);
apiRouter.post("/videos/:id([0-9a-f]{24})/like", clickLike);
export default apiRouter;

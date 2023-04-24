import express from "express";
import { home, editProfile, userId } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id", userId);

export default userRouter;

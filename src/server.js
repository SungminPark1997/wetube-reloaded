import "./db";
import movieModel from "./models/video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(
    `Time: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  );
  next();
};
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.get("/", () => console.log("home"));
app.listen(PORT, () => console.log("hi"));

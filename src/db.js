import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
db.on("error", (error) => console.log("DB error", error));
db.once("open", handleOpen);
// useNewUrlParser:true, useUnifiedTopology:true;

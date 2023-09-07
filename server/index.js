import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { test } from "./controller/test.js";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/add", test);
const PORT = 5000;
const DATABASE_URL =
  "mongodb+srv://palak:palak@practice1.bk7hgxq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));

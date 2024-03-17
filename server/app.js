/* eslint-disable no-undef */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import seriesRouter from "./routes/series.js";

const app = express();

// Prevent cors errors
app.use(cors());

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
app.use("/series", seriesRouter);

// Prevent not found 404
app.all("*", (_, res) => {
  res.status(404).json("Not found");
});

// App run
app.listen(3001, () => console.log("Proxy listening"));

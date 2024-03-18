/* eslint-disable no-undef */
import { Router } from "express";
import "../config.js";
import axios from "axios";
const router = Router();

const enviroment = process.env;
const API_URL = enviroment.API_URL;
const API_KEY = enviroment.API_KEY;

router.get("/observations", async (req, res) => {
  const series_id = req.query.series_id;
  const sort_order = req.query.sort_order || "asc";

  if (!series_id) return res.status(500).json("Series ID is required!");

  const URL = `${API_URL}/series/observations?series_id=${series_id}&api_key=${API_KEY}${
    sort_order ? `&sort_order=${sort_order}` : ""
  }&file_type=json`;

  try {
    const data = await axios(URL).then((response) => response.data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;

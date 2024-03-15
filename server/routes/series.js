/* eslint-disable no-undef */
import { Router } from "express";
import "../config.js";
import axios from "axios";
const router = Router();

const enviroment = process.env;
const API_URL = enviroment.API_URL;
const API_KEY = enviroment.API_KEY;
const SERIES_ID = enviroment.SERIES_ID;

router.get("/observations", async (_, res) => {
  const URL = `${API_URL}/series/observations?series_id=${SERIES_ID}&api_key=${API_KEY}&file_type=json`;
  try {
    const data = await axios(URL).then((response) => response.data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;

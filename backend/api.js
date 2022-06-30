const port = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.static(path.resolve(__dirname, "./build")));

app.use(cors());

app.get("/new", (req, res) => {
  const engine = req.query.engine;
  const prompt = req.query.prompt;
  const temperature = parseFloat(req.query.temperature);

  const options = {
    method: "POST",
    url: `https://api.openai.com/v1/engines/${engine}/completions`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    data: {
      prompt: prompt,
      temperature: temperature,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});

app.listen(port, () => console.log("Server is running on port 8000..."));

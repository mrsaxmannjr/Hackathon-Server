const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const data = require("./Data/data");
var selection = [];

app.use(cors());
app.use(bodyParser.json());

app.get("/clothes", (request, response) => {
  response.json(data.clothes);
});

app.get("/selection", (request, response) => {
  response.json(selection);
});

app.post("/selection", (request, response) => {
  selection.unshift(request.body);
  response.json("Post Worked");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});

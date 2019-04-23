const express = require("express");
import * as React from "react"
import { renderToString } from "react-dom/server";

import App from "../client/App";
import html from "../client/html";

const port = 3000;
const server = express();

server.use(express.static("dist"));

server.get("/", (req, res) => {
  const body = renderToString(React.createElement(App));
  const title = "SSR with TS";

  res.send(html({ body, title }));
});

server.listen(port);
console.log(`Server listening at port ${port}`);

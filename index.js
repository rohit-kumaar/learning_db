const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
const products = data.products;

const express = require("express");
const hostname = "127.0.0.1";
const port = 3000;

const server = express();

// API - Endpoint - Route
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.get("/demo", (req, res) => {
  res.send("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

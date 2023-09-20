const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
const products = data.products;

const express = require("express");
const hostname = "127.0.0.1";
const port = 8080;

const server = express();
const morgan = require("morgan");

// ✅ Built-in middleware
server.use(express.json()); // bodyParser
// server.use(express.urlencoded());
server.use(morgan("default"));
server.use(express.static("public"));

// ✅ Application-level middleware
server.use((req, res, next) => {
  console.log({
    date: new Date(),
    method: req.method,
    ip: req.ip,
    hostname: req.hostname,
  });
  next();
});

// ✅ Router-level middleware
const auth = (req, res, next) => {
  // req.query.password === "123" ? next() : res.sendStatus(401);
  // req.body.password === "123" ? next() : res.sendStatus(401); // 👈 bcz testing params
  next();
};

// ✅ API - Endpoint - Route
server.get("/product/:id", auth, (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});

server.post("/", auth, (req, res) => {
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

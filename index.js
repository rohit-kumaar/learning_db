const fs = require("fs");
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
const products = data.products;

const express = require("express");
const hostname = "127.0.0.1";
const port = 8080;

const server = express();
const morgan = require("morgan");

// ✅ Built-in middleware
server.use(express.json()); // bodyParser
server.use(morgan("default"));
server.use(express.static("public"));

// ✅ API - Endpoint - Route

// 👉 Products
// 👉 API ROOT, base URL

// ✅ CRUD
// 👉 Create POST /products
server.post("/products", (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
});

// 👉 Read GET /products
server.get("/products", (req, res) => {
  res.status(200).json(products);
});

// 👉 ReadOne GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  res.status(200).json(product);
});

// 👉 Update UPDATE /products/:id
server.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(205).json({ type: "Updated" });
});

// 👉 Patch  PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(206).json({ type: "Updated One" });
});

// 👉 Delete  DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(204).json({ type: "Deleted" });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

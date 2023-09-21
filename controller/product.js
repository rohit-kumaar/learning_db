const fs = require("fs");
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
const products = data.products;

const createProduct = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
};

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  res.status(200).json(product);
};

const replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(205).json({ type: "Updated" });
};

const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(206).json({ type: "Updated One" });
};

const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(204).json({ type: "Deleted" });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};

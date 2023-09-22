const Product = require("../model/product");

const CREATE = (req, res) => {
  const product = new Product(req.body);

  try {
    product.save();
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const GETALL = (req, res) => {
  res.status(200).json(dbData);
};

const GET = (req, res) => {
  const id = Number(req.params.id);
  const dbDataFind = dbData.find((p) => p.id === id);
  res.status(200).json(dbDataFind);
};

const REPLACE = (req, res) => {
  const id = Number(req.params.id);
  const dbDataFindIndex = dbData.findIndex((p) => p.id === id);
  dbData.splice(dbDataFindIndex, 1, { ...req.body, id: id });
  res.status(205).json({ type: "Updated" });
};

const UPDATE = (req, res) => {
  const id = Number(req.params.id);
  const dbDataFindIndex = dbData.findIndex((p) => p.id === id);
  const singleObject = dbData[dbDataFindIndex];
  dbData.splice(dbDataFindIndex, 1, { ...singleObject, ...req.body });
  res.status(206).json({ type: "Updated One" });
};

const DELETE = (req, res) => {
  const id = Number(req.params.id);
  const dbDataFindIndex = dbData.findIndex((p) => p.id === id);
  dbData.splice(dbDataFindIndex, 1);
  res.status(204).json({ type: "Deleted" });
};

module.exports = {
  CREATE,
  GETALL,
  GET,
  REPLACE,
  UPDATE,
  DELETE,
};

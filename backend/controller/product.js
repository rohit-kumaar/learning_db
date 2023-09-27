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

const GETALL = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

const GET = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

const REPLACE = async (req, res) => {
  const id = req.params.id;
  try {
    const replaceProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(205).json(replaceProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const UPDATE = async (req, res) => {
  const id = req.params.id;

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(206).json(updateProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const DELETE = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    res.status(205).json(deleteProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  CREATE,
  GETALL,
  GET,
  REPLACE,
  UPDATE,
  DELETE,
};

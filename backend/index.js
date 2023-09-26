require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`);
  console.log("Database is connected");
}

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const host = process.env.HOST;
const port = process.env.PORT;

// ✅ Built-in middleware
server.use(cors());
server.use(express.json()); // bodyParser

server.use("/products", productRouter);
server.use("/users", userRouter);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

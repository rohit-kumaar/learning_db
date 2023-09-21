const express = require("express");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const hostname = "127.0.0.1";
const port = 8080;

// ✅ Built-in middleware
server.use(express.json()); // bodyParser

server.use("/products", productRouter);
server.use("/users", userRouter);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

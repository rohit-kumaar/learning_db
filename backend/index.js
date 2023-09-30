require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const path = require("path");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`);
  console.log("Database is connected");
}

const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const host = process.env.HOST;
const port = process.env.PORT;
const public_dir = process.env.PUBLIC_DIR;

// ✅ Built-in middleware
server.use(cors());
server.use(express.json()); // ✅ bodyParser
server.use(express.static(path.resolve(__dirname, public_dir)));

// ✅ This is not working, bcz i set proper router in React App, in Tutorial Doesn't set the proper path in React App
// server.use("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });

// ✅ Routers paths
server.use("/products", productRouter);
server.use("/users", userRouter);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const jwt = require("jsonwebtoken");
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "./public.key"),
  "utf-8"
);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/ecommerce`);
  console.log("Database is connected");
}

const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const host = process.env.HOST;
const port = process.env.PORT;
const public_dir = process.env.PUBLIC_DIR;

// ✅ Access Token
const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    console.log(token);
    const decoded = jwt.verify(token, publicKey);
    console.log(decoded);

    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

// ✅ Built-in middleware
server.use(cors());
server.use(express.json()); // ✅ bodyParser
server.use(express.static(path.resolve(__dirname, public_dir)));

// ✅ This is not working, bcz i set proper router in React App, in Tutorial Doesn't set the proper path in React App
// server.use("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "index.html"));
// });

// ✅ Routers paths
server.use("/auth", authRouter);
server.use("/products", auth, productRouter);
server.use("/users", auth, userRouter);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

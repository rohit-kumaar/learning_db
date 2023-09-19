const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
const product = data.products[0];

const hostname = "127.0.0.1"; 
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    case "/products":
      res.setHeader("Content-Type", "text/html");
      const modifiedIndex = index
        .replace("**title**", product.title)
        .replace("**imgUrl**", product.thumbnail);
      res.end(modifiedIndex);
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

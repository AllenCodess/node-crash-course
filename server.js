import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Allen</h1>");
});

server.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});

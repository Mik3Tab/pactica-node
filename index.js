let http = require("http");
const suma = require("./math.js");
console.log(suma.sum(1,2));
http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Actualizado!");
  })
  .listen(5000);
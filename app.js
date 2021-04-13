const fetch = require("node-fetch");
const fs = require("fs");

fetch("http://jsonplaceholder.typicode.com/posts").then((res) => {
  const dest = fs.createWriteStream("./result/post.json");
  console.log("file written");
  res.body.pipe(dest);
});

import express from "express";
const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello I am Suhail</h1>");
});
app.listen(PORT, () => {
  console.log(`Sever is Running at PORT Number ${PORT}`);
});

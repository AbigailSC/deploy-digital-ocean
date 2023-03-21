import express from "express";

const app = express();

app.use("/", (_req, res) => {
  res.send("Testing deploy on Digital Ocean");
});

app.listen(3000, () => {
  console.log("🟢 Server running on port ", 3000);
});

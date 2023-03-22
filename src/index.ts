import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import userRoutes from "./routes/user.routes";

const URI = process.env.MONGOOSE_URI || "mongodb://127.0.0.1:27017/test-digital-ocean";
const port = process.env.PORT || 3000;

const app = express();

const connection = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

connection.once("open", () => {
  console.log("Database is connected");
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("🟢 Server running on port ", port);
});

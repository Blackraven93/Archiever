// external module
import express from "express";
import morgan from "morgan";
import session from "express-session";
// Other module import

const app = express();
const logger = morgan("dev");

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");

// Middleware
app.use(function (req, res, next) {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
  // ffmpeg 사용을 위해
  // 근데 여기 arrow function 사용하지 말길..
});
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static
app.use("/static", express.static("assets"));
app.use("/uploads", express.static("uploads"));
// Router

export default app;

//boostrap expressjs
import { rateLimit } from "express-rate-limit";
import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

//testing routes
app.get("/helloworld", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT.toString());
});

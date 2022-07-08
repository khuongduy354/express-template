"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//boostrap expressjs
const express_rate_limit_1 = require("express-rate-limit");
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
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
//# sourceMappingURL=index.js.map
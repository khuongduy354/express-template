"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    postId: {
        type: String,
        required: true,
        unique: true,
        default: () => null,
    },
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, default: true },
    body: { type: String, default: true },
}, { timestamps: true });
exports.Post = mongoose_1.default.model("Post", PostSchema);
//# sourceMappingURL=product.model.js.map
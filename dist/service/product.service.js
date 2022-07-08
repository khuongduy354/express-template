"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("../models/product.model");
const createProduct = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        product_model_1.Post.create(input);
    }
    catch (e) { }
});
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) { }
});
const updateProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        product_model_1.Post.findOne();
    }
    catch (e) { }
});
const deleteProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) { }
});
exports.ProductService = {
    createProduct,
    updateProduct,
    getProduct,
    deleteProduct,
};
//# sourceMappingURL=product.service.js.map
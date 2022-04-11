"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    product_name: { type: String },
    category_id: { type: String },
    product_price: { type: Number },
    image_url: { type: String },
});
const ProductModel = mongoose_1.default.model("product", productSchema);
exports.default = ProductModel;

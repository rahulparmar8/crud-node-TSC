import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_name: { type: String },
    category_id: {type:String},
    product_price: {type:Number},
    image_url: {type:String},
})

const ProductModel = mongoose.model("product", productSchema);

export default ProductModel;
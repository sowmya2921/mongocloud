const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/kh2"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
const SellerSchema = new Schema({
    sellername: String,
    GSTIN:Number,
    addressLine1:String,
    addressLine2:String,
    pincode:Number,
    city:String,
    status:String
});
const SellerModel = mongoose.model("Seller", SellerSchema);
module.exports = SellerModel
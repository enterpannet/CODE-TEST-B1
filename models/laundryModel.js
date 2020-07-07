const mongoose = require('mongoose');


const laundryShop = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    price: Number,
    //body: String,
}
);

const laundryshop=mongoose.model('itmes',laundryShop);

module.exports=laundryshop;
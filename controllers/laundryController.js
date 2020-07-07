const laundryShop=require('../models/laundryModel');

exports.index = async (req, res, next) => {

const laundryshop=await laundryShop.find();

    res.status(200).json({
        data: laundryshop        
      });
}
exports.shop = (req, res, next) => {
    res.send('สวัสดีครับ SHOP');
}
exports.valet = (req, res, next) => {
    res.send('สวัสดีครับ Valet')
}
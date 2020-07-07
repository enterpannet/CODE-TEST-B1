exports.index = function (req, res, next) {
  res.send('สวัสดีครับ users');
}

exports.login = (req, res, next)=> {
  res.status(200).json({message: 'สวัสดีครับ Login'})

}
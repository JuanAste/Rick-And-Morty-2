const user = require("../Utils/user");


const login = (req, res) => {
  const { email, password } = req.query;
  const log = user.filter((use) => use.email === email && use.password === password)
  if(log.length > 0){
    res.status(200).json({access: true})
  }else{
    res.status(200).json({access: false})
  }
};

module.exports = login;

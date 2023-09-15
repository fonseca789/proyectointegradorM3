const users = require("../utils/users");

const login = (req, res) => {
    
  const { email, password } = req.query;
  
  // console.log(users[0].email,users[0].password)
  if (email){

      const findUser = users.find((user) => user.email === email);
      if (findUser) {
        console.log(findUser.email === email, password ===findUser.password)
        if (email === findUser.email && password === findUser.password) {
          
          res.status(200).json({ access: true });
        } else res.status(200).json({ access: false });
      } 
      else res.status(400).json({ message: "User Not Found" });
  }
  else {
    res.status(400).json({access : false})
  }
};

module.exports = login;

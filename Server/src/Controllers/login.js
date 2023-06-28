const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  const log = await User.findOne({ where: { email, password } });
  if (log) {
    res.status(200).json({ access: true });
  } else {
    res.status(404).json({ access: false });
  }
};

const singUp = async (req, res) => {
  try {
    const { email, password } = req.query;
  const log = await User.findOne({ where: { email, password } });

  if (log) {
    res.status(201).json({ access: false });
  } else {
    await User.create({ email, password });
    res.status(200).json({ access: true });
  }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  
};

module.exports = {login, singUp};

const User = require('../models/User');

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já Cadastrado.' });
    }

    const { id, name, email, admin } = await User.create(req.body);

    return res
      .json({
        id,
        name,
        email,
        admin,
      })
      .status(200);
  }
}

module.exports = new UserController();

// controllers/authController.js
const authService = require('../services/authService');

const googleCallback = (req, res) => {
  const token = authService.createToken(req.user);
  // CLIENT_URL로 리디렉션하여 프론트엔드로 토큰 전달
  res.redirect(`${process.env.CLIENT_URL}/oauth2/redirect?token=${token}`);
};

const profile = (req, res) => {
  res.json({ user: req.user });
};

const logout = (req, res) => {
  res.json({ message: '로그아웃 완료' });
};

module.exports = {
  googleCallback,
  profile,
  logout,
};

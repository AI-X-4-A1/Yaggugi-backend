// middlewares/authenticateJWT.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: '토큰이 필요합니다' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: '토큰이 유효하지 않습니다' });
    }
    req.user = decoded.user; // 토큰에서 user 객체를 가져와 req.user에 할당
    next();
  });
};

module.exports = authenticateJWT;

